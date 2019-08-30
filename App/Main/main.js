
const Graph = require("../Map/Map.js").graph
const Player = require("../Player/Player.js").player
const Room = require("../Room/Room.js").room
const GameController = require("../GameController/GameController.js").gameController


// axios interceptors??
// my initial issues were due to 
// 0) trying to completely change shared state in Room object instead of just a property of that state
// 1) giving improper translated instructions to BFS retrace
// 2) improper use of 'in' keyword for checking for keys in an array

// this loop needs to become an async function
async function naiveTraversal(){
    let myGameController = GameController()
    let myPlayer = Player()
    //everytime I restart with node currRoom should give me room data from which I can BFS or DFS
    let evaluation  
    await myGameController.init().then((data) => {evaluation = data})
    let myGraph = Graph(evaluation)
    let currRoom = Room(evaluation)//pass the result of evaluate endopoint here
  
    let shopId = null
    let nameChanger = null
    let bfsResult = null

    while(myGraph.checkUnexplored()){
       
        
    
        let roomState = currRoom.getState()
       //seems like curr room is not updating
        console.log("using this for depthfirst",roomState)
        let depthFirstDirection = myGraph.chooseRandomDFS(roomState)//return n.s.e.w
        console.log("DEPTHFIRST DIRECTION",depthFirstDirection)
       
        //every async call requires a timer
        //Insert movement function here
       
    
        if (depthFirstDirection){
            //while we can naiveTraversal depth first let's move
            let nextRoomState
            await myGameController.move(depthFirstDirection).then((data) => {nextRoomState = data}) 
            //all game controller methods have built cooldown. Need to really think about the efficiency here
            
            //check for Shop, remember room_id
            if(nextRoomState.title.includes('Shop')){
                shopId = nextRoomState.room_id
            }
            //check for name Changer as player
            for(let player in nextRoomState.players){
                if (player.includes('changer')){
                    nameChanger = nextRoomState.room_id
    
                }
            }
    
            //start treasure check in the room into which I just moved
            for(let item of nextRoomState.items){
                let capacity = myPlayer.getState().strength
                let encumber = myPlayer.getState().encumberance
                if(item.includes('shiny')){
                    if (encumber !== capacity){
                        console.log("picking up treaseure")
                        await myGameController.getTreasure(item)
                        encumber +=1
                    }
            //check for name Changer as item
                if(item.includes('changer')){
                    nameChanger = nextRoomState.room_id
                }
            }}
    
            //update graph with nextRoom state, prev room state, and direction moved
            myGraph.update(nextRoomState,currRoom.getState(),depthFirstDirection)
            // currRoom.setState(nextRoomState)
            //trying this to reset roomsatate
            currRoom.setState(nextRoomState)
            console.log("Current Graph state",myGraph.getState())
            console.log("Trying to update with",nextRoomState)
            console.log("Print merged state",currRoom.getState())    
            //If we have reached out strength limits find the shop and move to the shop
    
    
        }
        else{
            
            console.log("BFS Current room",currRoom.getState())
            let nextShortestPathToUnexplored = myGraph.bfs(currRoom.getState(),'?') 
            console.log("NEXT SHORTEST",nextShortestPathToUnexplored)
            //translate nextShortestPathToUnexplored from integers to strings n.s.e.w
            let translatedDirections = []
            let currentGraph = myGraph.getState()
            
            //removed -1 from length next shortest
            for(let i = 0; i < nextShortestPathToUnexplored.length -1; i++){
                console.log("translating")
                let bfs_vertex = nextShortestPathToUnexplored[i]
                //[234]
                for(let value in currentGraph[bfs_vertex]){
                    if (currentGraph[bfs_vertex][value] === nextShortestPathToUnexplored[i +1]){
                        console.log("")
                        translatedDirections.push(value)
                    }
                }
            }
           console.log("Translation Complete",translatedDirections)
    
            //call move for each direction in new translated array
            //async didn't like forEach()
            for(let direction of translatedDirections){
                let nextRoomState
                await myGameController.move(direction).then((data) => {nextRoomState = data})
                // currRoom.setState(nextRoomState)
                //trying this to reset roomsatate
                currRoom.setState(nextRoomState)
                console.log("BFS RETRACING",currRoom.getState())
            }
            
           
    
            //*** So currently this should execute as follows. ****
    
            //while there are question marks in our graph 
            //DFS first, 
            //for each new room collect treasure while capacity exists and no Dead End.
            //for each room check for the shop id
            //update graph on traversal
    
            //Otherwise BFS
            //****This is where I left off****
            //Bfs will need to get shortest path to next unknown
            //call move for each item in that path (converting to n.s.e.w)
            //checking for treasure if capacity
            //updating graph on traversal
        }
        
       
        
    }

    //write current graphState to file
    // console.log("..........writing to file")
    // fs.writeFileSync('shop.json', JSON.stringify(shopId))
    // fs.writeFileSync('nameChanger.json', JSON.stringify(nameChanger))
    // fs.writeFileSync('graph.json', JSON.stringify(myGraph.getState()))
}



//////itemname takes the form str 'descriptor:value'
async function itemFinder(roomID){
    // let [k,v] = itemName.split(":")
    let currentGraph = Graph(null)
    let myGameController = GameController()
    // let itemLocations = []
    // for(let vertex in currentGraph){
    //     if(currentGraph[vertex][k] === v){
    //         itemLocations.push(vertex)
    //     }
    // }
    let currentRoom  
    console.log("Sourcing current room")
    await myGameController.init().then((data) => {currentRoom = data})
    let nextShortestPathToUnexplored = currentGraph.bfs(currentRoom,roomID) 


    console.log("NEXT SHORTEST",nextShortestPathToUnexplored)
     //translate nextShortestPathToUnexplored from integers to strings n.s.e.w
    let translatedDirections = []
    let translationGraph = currentGraph.getState()
    
 
    for(let i = 0; i < nextShortestPathToUnexplored.length -1; i++){
        console.log("translating")
        let bfs_vertex = nextShortestPathToUnexplored[i]
        //[234]
        for(let value in translationGraph[bfs_vertex]){
            
            if (translationGraph[bfs_vertex][value] === nextShortestPathToUnexplored[i +1]){
                console.log("",value)
                translatedDirections.push(value)
            }
        }
    }
    console.log("Translation Complete",translatedDirections)
   
    let shortened = nextShortestPathToUnexplored.slice(1,-1)

    for(direction of translatedDirections){
        
        let v = shortened.shift()

        console.log("VVVVVVV",v)
        let nextRoomState
        // console.log(translatedDirections[i],nextShortestPathToUnexplored[i+1])
        await myGameController.move([direction,v]).then((data) => {nextRoomState = data})
      
        //trying this to reset roomsatate
       
        console.log("BFS RETRACING",nextRoomState)
    }

    //call move for each direction in new translated array
    //async didn't like forEach()
    // for(let direction of translatedDirections){
    //     let nextRoomState
    //     await myGameController.move(direction).then((data) => {nextRoomState = data})
    //     // currRoom.setState(nextRoomState)
    //     //trying this to reset roomsatate
    //     currRoom.setState(nextRoomState)
    //     console.log("BFS RETRACING",currRoom.getState())
    //     }


}

// naiveTraversal()
itemFinder(495)




