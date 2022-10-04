import './App.css';
import Todolist from './component/Todolist';
import { TodoData } from './Constant';
import { CreateTodo } from './component/CreateTodo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(TodoData);
  const addTodos=(value)=>{
    const updatedTods = [...todos];
    updatedTods.push(value);
    setTodos(updatedTods);
  }

  return (
    <div className="App">
      <h3>TODOS</h3>
     <CreateTodo onSubmit=  {addTodos}/>
     <Todolist todItems={todos} />
    </div>
  );
}

export default App;
