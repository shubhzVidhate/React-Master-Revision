import { useReducer, useState } from 'react'
import { initialState, reducerCounter } from './reducerCounter'

const Counter = () => {

    const [inputValue,setInputValue] = useState(0);
    const [state,dispatch] = useReducer(reducerCounter,initialState)

    const handleIncrement = () => { dispatch({ type: 'Increment' } )};
    const handleDecrement = () => { dispatch({ type: 'Decrement' } )};

    const handleInputAddClick = () => {
        dispatch({ type: "IncrementByAmount", payload: +inputValue });
        setInputValue(0);
    }

    const handleInputSubClick = () => {
        dispatch({ type: "DecrementByAmount", payload: Number(inputValue) });
    }

  return (
    <div>
        <h1>Counter is { state.count }</h1>

        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <input type="text" value={inputValue} onChange={ e => setInputValue(e.target.value)} />
        <button onClick={handleInputAddClick}>Add</button>
        <button onClick={handleInputSubClick}>Sub</button>
        
    </div>
    
  )
}

export default Counter