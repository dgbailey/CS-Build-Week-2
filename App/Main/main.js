
const Graph = require("../Map/Map.js").graph
const Player = require("../Player/Player.js").player
const Room = require("../Room/Room.js").room
const GameController = require("../GameController/GameController.js").gameController

let myGameController = GameController()
let myGraph = Graph()
let myPlayer = Player()
//everytime I restart with node currRoom should give me room data from which I can BFS or DFS
let currRoom = Room(myGameController.evaluate(myPlayer.name))//pass the result of evaluate endopoint here
const shopId = null
const nameChanger = null





while(myGraph.checkUnexplored()){
    
    
    let roomState = currRoom.getState()
    let depthFirstDirection = myGraph.chooseRandomDFS(roomState)//return n.s.e.w
    
    //every async call requires a timer
    //Insert movement function here
   

    if (depthFirstDirection){
        //while we can traverse depth first let's move
        let nextRoomState = myGameController.move(depthFirstDirection)
        //all game controller methods have built cooldown. Need to really think about the efficiency here

        //check for Shop, remember room_id
        if(nextRoomState.name.includes('Shop')){
            shopId = nextRoomState.room_id
        }
        //check for name Changer as player
        for(player in nextRoomState.players){
            if (player.includes('changer')){
                nameChanger = nextRoomState.room_id

            }
        }

        //start treasure check in the room into which I just moved
        for(item of nextRoomState.items){
            let capacity = myPlayer.getState().strength
            let encumber = myPlayer.getState().encumberance
            if(item.includes('treasure')){
                if (encumber !== capacity){
                    console.log("picking up treaseure")
                    myGameController.getTreasure(item)
                    encumber +=1
                }
        //check for name Changer as item
            if(item.includes('changer')){
                nameChanger = nextRoomState.room_id
            }
        }}

        //update graph with nextRoom state, prev room state, and direction moved
        myGraph.update(nextRoomState,currRoom.getState(),depthFirstDirection)
        currRoom.setState(nextRoomState)

        //If we have reached out strength limits find the shop and move to the shop


    }
    else{

        let nextShortestPathToUnexplored = myGraph.bfs(currRoom.getState(),'?')
        //translate nextShortestPathToUnexplored from integers to strings n.s.e.w
        let translatedDirections = []
        let currentGraph = myGraph.getState()

        for(let i ; i < nextShortestPathToUnexplored.length -1 ; i++){
            let bfs_vertex = nextShortestPathToUnexplored[i]
            for(let value in currentGraph[bfs_vertex]){
                if (currentGraph[bfs_vertex][value] === nextShortestPathToUnexplored[i +1]){
                    translatedDirections.append(value)
                }
            }
        }

        //call move for each direction in new translated array
        
        translatedDirections.forEach(direction => {
            
            let nextRoomState = myGameController.move(direction)
            currRoom.setState(nextRoomState)
        })

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
console.log("..........writing to file")
fs.writeFileSync('shop.json', JSON.stringify(shopId))
fs.writeFileSync('nameChanger.json', JSON.stringify(nameChanger))
fs.writeFileSync('graph.json', JSON.stringify(myGraph.getState()))



