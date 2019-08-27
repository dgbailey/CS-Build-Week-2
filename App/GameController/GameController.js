//Game controller (movement, sell, fly etc)
const fetch = require("node-fetch");
let gameState = {
    'cooldown':0
}

const GameController = () =>{

    return Object.assign({},move(gameState),
                        getTreasure(gameState),
                        sellTreasure(gameState),
                        confirmSale(gameState),
                        changeName(gameState),
                        checkInventory(gameState),
                        evaluate(gameState))

    
}

const _setGameStateCooldown = (secToMilsec) =>{
    gameState.cooldown = secToMilsec * 1000
}

const evaluate = gameState => {
    return(
        {
        'evaluate': setTimeout(name => {
            let body = {"name":`[${name}]`}
            fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/examine/',
            {
                'method':"POST",
                'body':JSON.stringify(body),

                'headers':{
                    'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                    'Content-Type': 'application/json'
                }
            }).then(
                function(response){
                    //reads response data async, headers arrive first, then body
                    //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
                    response.json().then(data => {
                        _setGameStateCooldown(data.cooldown)
                        console.log("cooldown set:",data.cooldown)
                        return data
                    }
        	        )}
                ,
                function(error){
                    console.log(error.message)
                })
            
           
            
        },gameState.cooldown)
    }
    )
}


const move = gameState  =>{
    //takes only the direction n.s.e.w
    return(
        {
        'move': setTimeout(direction => {
            let body = {'direction':direction}
            fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/',
            {
                'method':"POST",
                'body':JSON.stringify(body),

                'headers':{
                    'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                    'Content-Type': 'application/json'
                }
            }).then(
                function(response){
                    //reads response data async, headers arrive first, then body
                    //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
                    response.json().then(data => {
                        _setGameStateCooldown(data.cooldown)
                        console.log("cooldown set:",data.cooldown)
                        return data
                    }
        	        )}
                ,
                function(error){
                    console.log(error.message)
                })
            
           
            
        },gameState.cooldown)
    }
    )
}

const getTreasure = gameState => {
    return(
    {
    'getTreasure': setTimeout(treasureName => {
        let body = {"name":`${treasureName}`}
        fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/take/',
        {
            'method':"POST",
            'body':JSON.stringify(body),

            'headers':{
                'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                'Content-Type': 'application/json'
            }
        }).then(
            function(response){
                //reads response data async, headers arrive first, then body
                //promise within a promise here?
                //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
       
                response.json().then(data => {
                    _setGameStateCooldown(data.cooldown)
                    console.log("cooldown set:",data.cooldown)
                    console.log("You took treasure:",data)
                }
                )}
            ,
            function(error){
                console.log(error.message)
            })
        
       
        
    },gameState.cooldown)}
    
)}

const sellTreasure = gameState => {
    return(
    {
    'sellTreasure': setTimeout(treasureName => {
        let body = {"name":`${treasureName}`}
        fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/',
        {
            'method':"POST",
            'body':JSON.stringify(body),

            'headers':{
                'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                'Content-Type': 'application/json'
            }
        }).then(
            function(response){
                //reads response data async, headers arrive first, then body
                //promise within a promise here?
                //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
           
                response.json().then(data => {
                    _setGameStateCooldown(data.cooldown)
                    console.log("cooldown set:",data.cooldown)
                    console.log("You proposed selling treasure, PLEASE CONFIRM:",data)
                }
                )}
            ,
            function(error){
                console.log(error.message)
            })
        
       
        
    },gameState.cooldown)}
    
)}

const confirmSale = gameState => {
    return(
    {
    
    'sellTreasure': setTimeout(treasureName => {
        body = {"name":`${treasureName}`, "confirm":"yes"}
       
        fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/',
        {
            'method':"POST",
            'body':JSON.stringify(body),

            'headers':{
                'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                'Content-Type': 'application/json'
            }
        }).then(
            function(response){
                //reads response data async, headers arrive first, then body
                //promise within a promise here?
                //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
                
               
                response.json().then(data => {
                    _setGameStateCooldown(data.cooldown)
                    console.log("cooldown set:",data.cooldown)
                    console.log("You SOLD treasure:",data)
                }
                )}
                
            ,
            function(error){
                console.log(error.message)
            })
        
       
        
    },gameState.cooldown)}
    
)}

const changeName = gameState => {
    return(
    {
    'changeName': setTimeout(name => {
        let body = {"name":`[${name}]`}
        fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/',
        {
            'method':"POST",
            'body':JSON.stringify(body),

            'headers':{
                'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                'Content-Type': 'application/json'
            }
        }).then(
            function(response){
                //reads response data async, headers arrive first, then body
                //promise within a promise here?
                //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
                response.json().then(data => {
                    _setGameStateCooldown(data.cooldown)
                    console.log("cooldown set:",data.cooldown)
                    console.log("You Changed your Name!:",data)
                }
                )}
                
            ,
            function(error){
                console.log(error.message)
            })
        
       
        
    },gameState.cooldown)}
    
)}

const checkInventory = gameState => {
    return(
    {
    'checkInventory': setTimeout(() => {
        
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
               
                    response.json().then(data => {
                        _setGameStateCooldown(data.cooldown)
                        console.log("cooldown set:",data.cooldown)
                        console.log("You Inventory:",data)
                    }
                    )}
                    
            ,
            function(error){
                console.log(error.message)
            })
        
       
        
    },gameState.cooldown)}
    
)}


module.exports = {
    gameController:GameController
}

//https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/

//https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/

// let myController = GameController()
// myController.move({"direction":"s"})