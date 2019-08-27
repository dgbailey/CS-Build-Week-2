//exported graph object

const Graph = () =>{
    let graphState = {0: {"n": "?", "s": "?", "e": "?", "w": "?"}}

    //graph 'inherits' properties from other function objects via concatenative inheritance 

    return Object.assign({},chooseRandomDFS(graphState),
                            update(graphState),
                            checkUnexplored(graphState),
                            bfs(graphState),
                            getState(graphState))
}


//BFS for shortest path to a desired room

const bfs = graphState => (currentRoom, desired_room_identifyer = '?') =>{
    //defaults to finding unexplored rooms
    //will also take custom configurable for finding store and other landmarks
    //perhaps label the store with a special key once found
    return(
        {
        'bfs': (currentRoom, desired_room_identifyer) => {

            //helper function for searching within graph sub arrays
            function _room_identifyer_helper(desired_room_identifyer){
                let roomDirections = Object.keys(graphState[currentRoom.id])
                let curr = graphState[currentRoom.id]
                let directions = []
                roomDirections.forEach(directionKey => {
                    if(curr[directionKey] === desired_room_identifyer){
                        directions.append(directionKey)
                        }
                    })
                if(directions.length < 1){
                    console.log("_room_identifyer_helper: No matching destination for BFS")
                    return false
                }
                else{
                    return directions[0]
                }

            }

            //start BFS

            let queue = []
            queue.push([currentRoom.id])
            let found = []

            while (queue.length > 0){
                let path = queue.shift() 
                let vertex = path[-1]

                if(!found.includes(vertex)){
                    //if our current vertex has not been visited check for our search value
                    let check_for_desired_room_identifyer = _room_identifyer_helper(graphState[vertex])
                    if(check_for_desired_room_identifyer){
                        return path
                    }
                    //append visited vertex to found
                    found.append(vertex)
                    let possible_directions = Object.keys(graphState[vertex])
                   
                    possible_directions.forEach(direction => {
                        //for each direct neighbor of current vertex, copy current path, append that neighbor, enqueue new path
                        let new_path_to_explore = [...path]
                        new_path_to_explore.push(graphState[vertex][direction])
                        queue.push(new_path_to_explore)

                    })

                   
                }

                return null
            }
        }
    })
}


//checks if there are still unexplored rooms in graph
const checkUnexplored = graphState =>{
    return(
        {
        'checkUnexplored':() => {
            let found = false
           Object.keys(graphState).forEach(key => {
                let subKeys = Object.keys(graphState[key])
                console.log(subKeys)
                
                for(direction of subKeys){
                    console.log(graphState[key][direction])
                    if(graphState[key][direction] === '?'){
                      console.assert('matched')
                      found = true
                      break
                        
                    }
                }
                return found  
                
               })
                   
            return found
              
        
           
        }

    })
}

//choose random starting point for depthfirst search of graph
const chooseRandomDFS = graphState => roomObject =>{
    //takes current room object
    return (
        {
        'chooseRandomDFS': roomObject =>{
            let unvisitedRooms = []
            let roomId = roomObject.id
            
            //check for quetion marks in exits array
            for (direction of roomObject.exits){
                if (graphState[roomId][direction] == "?"){
                    unvisitedRooms.push(direction)
                }
            }

            //return false if dead end -- no unexplored rooms
            if (unvisitedRooms.length < 1){
                return false
            }

            else{
                //select random direction
                let choiceIndex = Math.floor(Math.random() * unvisitedRooms.length)
                return unvisitedRooms[choiceIndex]
            }


        }
    })
}
const getState = graphState => {
    return(
        {'getState':() => graphState}
    )
    
}
const update = graphState => (newRoomObject,prevRoomObject,prevDirection) => {

    return(
        {
            "update":(newRoomObject,prevRoomObject,prevDirection) =>{
                function get_opposite(direction){
                    const direction_dict = {'n':'s','s':'n','e':'w','w':'e'};
                    return direction_dict[direction]
                }
                graphstate[prevRoomObject.room_id].prevDirection = newRoomObject.roomId;

                //perform updates when new data found for existing rooms
                if (newRoomObject.id in Object.keys(graphState)){
                    let inverseDirectionForUpdate = get_opposite(prevDirection);
                    graphState[newRoomObject.id].foundDirectionForUpdate = prevRoomObject.room_id;
                }
                

                else{
                    //add new room when new room id not found in graphstate
                    //update new room with directions back to previous room
                    let inverseDirectionForUpdate = get_opposite(prevDirection);
                    graphState[newRoomObject.roomId] = {}
                    newRoomObject.exits.forEach(exitLabel => {
                        graphState[newRoomObject.roomId].exitLabel = '?';
                    })

                    graphState[newRoomObject.id].inverseDirectionForUpdate = prevRoomObject.room_id

                }



            }
        }
    )

}

module.exports = {graph:Graph}



//test
// const myGraph = Graph()
// console.log(myGraph.graphState)

//graph
//player
//blockchain
//wise explorer
//find shop
//cooldown