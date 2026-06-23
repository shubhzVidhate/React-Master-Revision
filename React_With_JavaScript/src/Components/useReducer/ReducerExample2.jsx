import { useReducer } from 'react'

const ReducerExample2 = () => {
    const initialState = { count:0 };

    const reducer = (state,action) => {
        switch(action.type){
            case "increment":
            return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
                case "reset":
                    return { count: 0 }
                    default:
                        return state;
        }
    }

    const [state,dispatch] = useReducer( reducer, initialState);


  return (
    <div>

        <button onClick={ ()=> dispatch({ type:"increment" }) }>+</button>
        <button onClick={ ()=> dispatch({ type:"decrement" }) }>-</button>
        <button onClick={ ()=> dispatch({ type:"reset" }) }>Reset</button>
        
        <h1>Count Vallue is { state.count }</h1>

    </div>
  )
}

export default ReducerExample2;