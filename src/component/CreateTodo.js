import { useState } from "react";

export const CreateTodo = ({ onSubmit }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = ()=>{
    onSubmit(todo);
    setTodo('');
  }
  return (
    <div>
      <input type="text" value={todo} onChange={(e) => {setTodo(e.target.value)}} />
      <button onClick={()=> handleSubmit()}>Add</button>
    </div>
  );
};
