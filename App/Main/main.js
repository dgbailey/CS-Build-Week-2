
const Graph = require("../Map/Map.js").graph
const Player = require("../Player/Player.js").player
const Room = require("../Room/Room.js").room


let myGraph = Graph()
let myPlayer = Player()
let currRoom = Room()
let coolDown = 0



while(myGraph.checkUnexplored()){
    
    let current_room_detail = currRoom.getState()
    let depth_first_direction = myGraph.chooseRandomDFS(currentRoom)//return n.s.e.w

    
    //every async call requires a timer
    //Insert movement function here
   

    if (depth_first_direction){
        //if we have not encountered a dead end
        // let newRoom = setTimer(call player movement function(depth_first_direction),coolDown)
        //get treasure http call conditionally chained to this movement
        myGraph.update(newRoom,currRoom,depth_first_direction)
        currRoom.setState(newRoom)
    
        coolDown = currRoom.getState.coolDown
        //only update player state encumbrance has reached 10
        //update player state?

    }
    else{
        //initiate myGraph.bfs()
    }
    
   
    
}



