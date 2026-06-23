// import UpdateUserContext from './Components/UseContext/UpdateUserContext.jsx'
// import { ContextProvider } from './Components/UseContext/UserContext.jsx'
// import UserProfile from './Components/UseContext/UserProfile.jsx'
// import ReducerExample from './Components/useReducer/ReducerExample.jsx'
// import ReducerExample2 from './Components/useReducer/ReducerExample2.jsx'
// import Counter from "./Components/useReducer/Counter.jsx"

// import { useRef } from "react";
import UniqueId from "./Components/UseIdHook/UniqueId";
import FocusInput from "./Components/UseRefHook/FocusInput";
import Timer from "./Components/UseRefHook/Timer";

function App() {

  // const inputElement = useRef(null);

  // console.log(inputElement);

  // const handleClick = ()=>{
  //   inputElement.current.focus();
  //   inputElement.current.value = "Shubham"
  // }

  return (
    //  <ContextProvider>
    //     <UserProfile />
    //     <UpdateUserContext />
    //  </ContextProvider>
    // <ReducerExample />
    // <ReducerExample2 />
    // <Counter />

    // <div>
    //   <input type="text" ref={inputElement}></input>
    //   <button onClick={handleClick}>Add Focus</button>
    // </div>

    // <FocusInput/>
    // <Timer />
    <div>
    
    <UniqueId />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, est accusantium! Corporis ut perferendis, nostrum corrupti sit est inventore? Consequatur?
    <UniqueId />
    </div>
  );
}

export default App;
