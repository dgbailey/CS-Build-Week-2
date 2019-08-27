
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





while(myGraph.checkUnexplored()){
    
    
    let roomState = currRoom.getState()
    let depthFirstDirection = myGraph.chooseRandomDFS(roomState)//return n.s.e.w
    
    //every async call requires a timer
    //Insert movement function here
   

    if (depthFirstDirection){
        //while we can traverse depth first let's move
        let nextRoomState = myGameController.move(depthFirstDirection)
        //all game controller methods have built in dynamic cooldown

        //check for Shop, remember room_id
        if(nextRoomState.name.includes('Shop')){
            shopId = nextRoomState.room_id
        }

        //start treasure check in the room in which I just moved
        for(item of nextRoomState.items){
            let capacity = myPlayer.getState().strength
            let encumber = myPlayer.getState().encumberance
            if(item.includes('treasure')){
                if (encumber !== capacity){
                    console.log("picking up treaseure")
                    myGameController.getTreasure(item)
                    encumber +=1
                }
                else{
                    break
                }
        }}

        //update graph with nextRoom state, prev room state, and direction moved
        myGraph.update(nextRoomState,currRoom.getState(),depthFirstDirection)
        currRoom.setState(nextRoomState)

        //If we have reached out strength limits find the shop and move to the shop


    }
    else{
        //initiate myGraph.bfs()
    }
    
   
    
}

//write current graphState to file
console.log("..........writing to file")
console.log("..........shopId",shopId)
fs.writeFileSync('graph.json', JSON.stringify(myGraph.getState()));



