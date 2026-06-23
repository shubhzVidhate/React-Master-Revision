import React, { useState } from "react";
import "../style.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  

  const handleClick = ()=>{
    setTodos((todos)=>{
    return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });
    
    setInput("");
  }

  const handleRemoveClick = (id) =>{
    setTodos(todos => todos.filter(t => t.id !== id  ));

  }

  return (
    <div className="container-todo">
      <input
        type="text"
        className="input-todo"
        placeholder="New Todo"
        value={input}
       onChange={(e)=>setInput(e.target.value)}
      />
      <button className="button-todo" type="submit" onClick={handleClick}>Submit</button>


      <br />

      <ul className="todos-list">
        {
          todos.map(({text,id}) => {
            return <li className="todo" key={id}>
              <span>{text}</span>
              <button className="close-todo" onClick={ () => handleRemoveClick(id) }>x</button>
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default Todo;
