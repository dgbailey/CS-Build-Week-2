//room composed object

const Room = evaluate =>{
    let roomState = {
       ...evaluate
      }

    return Object.assign({},setState(roomState),
                            getState(roomState))
      
}

const setState = roomState => newState =>{
    return(
        {

        "setState":() =>{
           roomState = {
               ...roomState,...newState
           }
        }
    })
}

const getState = roomState =>{
    return(
        {

        "getState":() =>{
           return roomState
        }
    })
}

module.exports = {room:Room}