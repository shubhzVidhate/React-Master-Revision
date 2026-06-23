import { useContext } from "react"
import { UserContext } from "./UserContext"

const UserProfile = () => {

    const { user } = useContext(UserContext);

    
  return (

    <div>
        <h1>UserProfile</h1>

        <h2>My Name is {user.name}</h2>
    </div>

  )
}

export default UserProfile;