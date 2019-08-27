
const Graph = require("../Map/Map.js").graph
const Player = require("../Player/Player.js").player
//test
// const myGraph = Graph()
// console.log(myGraph.graphState)

const myGraph = Graph()
const myPlayer = Player()
console.log(Object.keys(myGraph))

// myPlayer.getState
// myGraph.getState
console.log("unexplored",myGraph.checkUnexplored())

while(myGraph.checkUnexplored()){
   console.log("Hello")
    
}
ç


