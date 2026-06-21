
import UpdateUserContext from './Components/UseContext/UpdateUserContext.jsx'
import { ContextProvider } from './Components/UseContext/UserContext.jsx'
import UserProfile from './Components/UseContext/UserProfile.jsx'

function App() {

  return (
   <ContextProvider>
      <UserProfile />
      <UpdateUserContext />
   </ContextProvider>
  )
}

export default App
