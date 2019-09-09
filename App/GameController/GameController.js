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
                        evaluate(gameState),
                        init(gameState))

    
}


const _setGameStateCooldown = (secToMilsec) =>{
    gameState.cooldown = secToMilsec * 1000
}
function delay(t,v) {
    return new Promise(function(resolve) { 
        setTimeout(resolve,t,v)
    });
 }

 //write init function

const init = gameState => {
    return(
        {
        'init': () => delay(gameState.cooldown).then(() => {
           
            console.log("FIRING INIT!!!")
            return fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/init/',
            {
                'method':"GET",
                

                'headers':{
                    'Authorization': 'Token 08b78c7c2567cf18a2e58185f8fac661b75363df',
                    'Content-Type': 'application/json'
                }
            }).then(
                function(response){
                    
                    //reads response data async, headers arrive first, then body
                    //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
                    return response.json().then(data => {
                        _setGameStateCooldown(data.cooldown)
                        console.log("cooldown set:",data.cooldown)
                        return data
                    }
                    ).catch((error) => {
                        console.log(error)
                      })}
            
                ,
                function(error){
                    console.log(error.message)
                })
                
            
            
            
        })
    }
    )
    }

const evaluate = gameState => {
    return(
        {
        'evaluate': name => delay(gameState.cooldown,name).then(name => {
            console.log("NAMEEE",name)
            let body = {"name":name}
            console.log("***BODY******",body)
            console.log("FIRING FETCH EVAL!!!")
            return fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/examine/',
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
                    return response.json().then(data => {
                        _setGameStateCooldown(data.cooldown)
                        console.log("cooldown set:",data.cooldown)
                        return data
                    }
                    )}
            
                ,
                function(error){
                    console.log(error.message)
                })
                
            
           
            
        })
    }
    )
}


const move = gameState  =>{
    //takes only the direction n.s.e.w
    return(
        {
        'move': (direction,v) => delay(gameState.cooldown,direction).then((direction) => {
            let [v,d] = direction
            console.log("FIRING MOVE TEST")
            let body = {"direction":v,"next_room_id":`${d}`}
            console.log("***FIRING MOVE******")
            console.log("***BODY******",body)
            return fetch('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/',
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
                    return response.json().then(data => {
                        _setGameStateCooldown(data.cooldown)
                        console.log("Data from first move",data.room_id)
                        console.log("cooldown set MOVEMENT:",data.cooldown)
                        
                        return data
                    }
        	        )}
                ,
                function(error){
                    console.log(error.message)
                })
            
           
            
        })
    }
    )
}

const getTreasure = gameState => {
    return(
    {
    'getTreasure': treasureName  => delay(gameState.cooldown,treasureName).then(treasureName => {
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
        
       
        
    })}
    
)}

const sellTreasure = gameState => {
    return(
    {
    'sellTreasure': treasureName => delay(gameState.cooldown,treasureName).then(treasureName => {
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
        
       
        
    })}
    
)}

const confirmSale = gameState => {
    return(
    {
    
    'confirmSale': treasureName => delay(gameState.cooldown,treasureName).then(treasureName => {
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
        
       
        
    })}
    
)}

const changeName = gameState => {
    return(
    {
    'changeName': name => {
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
        
       
        
    }}
    
)}


module.exports = {
    gameController:GameController
}

//https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/

//https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/
// async function test(){
//     let myController = GameController()
//     let hello
//     await myController.evaluate('player149').then((data) => {hello = data})

//     console.log("LOGGING",hello)
// }

// test()