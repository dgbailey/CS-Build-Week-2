//room composed object
//1) I beleive explanation 1 to be incorrect
//here we are passing roomState to two functions, these are initialized with
// the same non primitive reference to roomState, each returned sub object has that reference in its VO containing its local variables and params
//changing the roomState arg reference locally for set state, does not change it locally for getState. Hence why getState will return the same original state reference,
//Unless you use setState to mutate the original reference to the non primitive

//2)I believe explanation 2 to be closer to correct

//for reference
//1 Think of an execution context as an object with certain properties (scopeChain...,localVarContainer...,this keyword...} that is placed on the execution stack when a function is invoked. Just above the global context

//  RoomState ref may just be stored in the local variable object of each 'method's'(e.g. setState, getState) execution context.  The objects returned from these 
//'methods' contain arrow functions that 'close over' the lexical contex(method definitions, again setState & getState ) they were written within. Thus giving them access to the reference (mem address) for RoomState in the scope
//chain property of their execution contexts once they are invoked.

//if you were to change the reference pointer using SetState in this fashion (e.g  newState=> roomState = newState) you would only be changing the memory address that 
//the roomState variable local to the original setState => {} fucntion scope points to.  As a result calling getState immediately afterward would return the original roomState value
//due to the fact that the scopes of these two functions now contain roomState locals that point to different addresses.

//The only way to effectively share state would then be to mutate the original roomState object in your setState method.  This directly changes the object located at the mem address
//shared between the method scopes below.
//The confusing part when using concatenative inheritance is that you are actually not concatenating local excution scopes of functions. Which for me was an easy trap to fall into. You are just concatenating the properties 
//of objects returned from our 'methods' into one object.

const Room = evaluate =>{
    let roomState = {}
    roomState[0] = {...evaluate}
      

    return Object.assign({},setState(roomState),
                            getState(roomState))
      
}

const setState = roomState  =>{
    return(
        {

        "setState": newState => {
          roomState[0] = {...newState}
           
        }
    }
    )
}

const getState = roomState =>{
    return(
        {

        "getState":() =>{
           return roomState[0]
        }
    })
}
//test in isolation
// let initRoom = {'a':1,'b':2}
// let myRoom = Room(initRoom)


// let nextRoom = {'c':3,'d':4}
// myRoom.setState(nextRoom)

module.exports = {room:Room}