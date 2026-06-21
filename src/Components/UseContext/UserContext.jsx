import { createContext, useState } from "react";

const UserContext = createContext();


const ContextProvider = ({ children })=>{

    const [ user, setUser ] = useState({name:"Shubham"});

    const updateUser = (newName)=>{
        setUser( { name: newName });
    }

    return <UserContext.Provider value={ { user, updateUser } }>

            { children }
            
        </UserContext.Provider>

} 

export { UserContext, ContextProvider };