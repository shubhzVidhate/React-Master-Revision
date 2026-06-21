import { useContext , useState } from "react";
import { UserContext } from "./UserContext.jsx";

const UpdateUserContext = () => {
  const {  updateUser } = useContext(UserContext);
  const [name,setName] = useState("");


  const  handleSubmit = (e) => {
    e.preventDefault();
    updateUser(name);
    setName("");
  }
  return (
    <section>
      <h1>Update User Context</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter New Name"
        />
        <button type="submit">Update User</button>
      </form>
    </section>
  );
};

export default UpdateUserContext;
