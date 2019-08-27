//Game controller (movement, sell, fly etc)
const fetch = require("node-fetch");
let gameState = {

}

const GameController = () =>{

    return Object.assign({},move(gameState),
                        getTreasure(gameState),
                        sellTreasure(gameState),
                        confirmSale(gameState),
                        changeName(gameState),
                        checkInventory(gameState))

    
}




const move = gameState  =>{
    //takes only the direction n.s.e.w
    return(
        {
        'move': data => {
            let body = {'direction':data}
            fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/',
            {
                'method':"POST",
                'body':JSON.stringify(data),

                'headers':{
                    'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                    'Content-Type': 'application/json'
                }
            }).then(
                function(response){
                    //reads response data async, headers arrive first, then body
                    //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
                    response.json().then(data => 
        	console.log(data))}
                ,
                function(error){
                    console.log(error.message)
                })
            
           
            
        }
    }
    )
}

const getTreasure = gameState => {
    return(
    {
    'getTreasure': () => {
        let data = {"name":"treasure"}
        fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/take/',
        {
            'method':"POST",
            'body':JSON.stringify(data),

            'headers':{
                'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                'Content-Type': 'application/json'
            }
        }).then(
            function(response){
                //reads response data async, headers arrive first, then body
                //promise within a promise here?
                //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
                response.json().then(data => 
                    
                    console.log("You took treasure:",data))}
            ,
            function(error){
                console.log(error.message)
            })
        
       
        
    }}
    
)}

const sellTreasure = gameState => {
    return(
    {
    'sellTreasure': () => {
        let data = {"name":"treasure"}
        fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/',
        {
            'method':"POST",
            'body':JSON.stringify(data),

            'headers':{
                'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                'Content-Type': 'application/json'
            }
        }).then(
            function(response){
                //reads response data async, headers arrive first, then body
                //promise within a promise here?
                //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
                response.json().then(data => 
                    
                    console.log("You proposed selling treasure, PLEASE CONFIRM:",data))}
            ,
            function(error){
                console.log(error.message)
            })
        
       
        
    }}
    
)}

const confirmSale = gameState => {
    return(
    {
    
    'sellTreasure': () => {
        data = {"name":"treasure", "confirm":"yes"}
       
        fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/',
        {
            'method':"POST",
            'body':JSON.stringify(data),

            'headers':{
                'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                'Content-Type': 'application/json'
            }
        }).then(
            function(response){
                //reads response data async, headers arrive first, then body
                //promise within a promise here?
                //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
                response.json().then(data => 
                    
                    console.log("You SOLD treasure:",data))}
            ,
            function(error){
                console.log(error.message)
            })
        
       
        
    }}
    
)}

const changeName = gameState => {
    return(
    {
    'changeName': name => {
        let data = {"name":`[${name}]`}
        fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/',
        {
            'method':"POST",
            'body':JSON.stringify(data),

            'headers':{
                'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                'Content-Type': 'application/json'
            }
        }).then(
            function(response){
                //reads response data async, headers arrive first, then body
                //promise within a promise here?
                //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
                response.json().then(data => 
                    
                    console.log("You Changed your Name!:",data))}
            ,
            function(error){
                console.log(error.message)
            })
        
       
        
    }}
    
)}

const checkInventory = gameState => {
    return(
    {
    'checkInventory': () => {
        
        fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/status/',
        {
            'method':"POST",
           
            'headers':{
                'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                'Content-Type': 'application/json'
            }
        }).then(
            function(response){
                //reads response data async, headers arrive first, then body
                //promise within a promise here?
                //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
                response.json().then(data => 
                    
                    console.log("You Inventory:",data))}
            ,
            function(error){
                console.log(error.message)
            })
        
       
        
    }}
    
)}


module.exports = {
    gameController:GameController
}

//https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/

//https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/

// let myController = GameController()
// myController.move({"direction":"s"})