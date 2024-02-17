import React, { useReducer } from 'react'
const initialState = { count: 0 }
type counterState = {
   count:number
}
type actionState={
   
        type:String
        payload:number
}

function reducer(state: counterState, action: actionState) {
    switch (action.type) {
        case "INCR":
            return {
                count:  state.count + action.payload 
            }
        case "DESCR":
            return {
                count:  state.count - action.payload 
            }
        default:
            return state
            
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h2>count:{state.count}</h2>
            <button onClick={() => dispatch({ type: "INCR", payload: 10 })}>increase</button>
            <button onClick={() => dispatch({ type: "DESCR", payload: 10 })}>Decrease</button>
        </>
    )
}

