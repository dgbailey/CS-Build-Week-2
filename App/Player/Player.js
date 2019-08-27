//player object



const Player = () => {
    let playerState = {
        "name": "player149", 
        "cooldown": 1.0, 
        "encumbrance": 0,
         "strength": 10, 
         "speed": 10, 
         "gold": 0, 
         "inventory": [], 
         "status": [], 
         "has_mined": false, 
         "errors": [], 
         "messages": []
        }

    return Object.assign({},setState(playerState),
                            getState(playerState))
}


const setState = playerState => newState => {

    return({

        'setState':newState =>{
            playerState = {
                ...playerState,...newState
            }
        }
    })

}

const getState = playerState =>  {

    return({

        'getState':() =>{
            console.log(playerState)
        }
    })

}

module.exports = {player:Player}

//change name

//get treasure

//mine

//move

//sell
