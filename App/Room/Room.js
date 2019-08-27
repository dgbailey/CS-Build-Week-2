//room composed object

const Room = () =>{
    let roomState = {
        "room_id": 10,
        "title": "A Dark Room",
        "description": "You cannot see anything.",
        "coordinates": "(60,61)",
        "exits": ["n", "s", "w"],
        "cooldown": 0,
        "errors": [],
        "messages": ["You have walked north."]
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