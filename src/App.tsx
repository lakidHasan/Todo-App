import React, { useState } from 'react';
import './App.css';
import Form from './Component/Form/Form';
import TODOI from './Component/Interface/TodoInterface';
import List from './Component/List/List';

const App = () => {

  const [ todos, setTodos] = useState<TODOI[]>( [
    {
      id: 1,
      text: 'do coding',
      completed: false,
    },
    {
      id: 2,
      text: 'do eating',
      completed: true,
    }
  ]);

  const addTodo = (todo:string) : void=>{

    const data : TODOI = {
        id: todos.length > 0 ? todos[todos.length -1].id + 1 : 1,
        text: todo,
        completed: false,
    };
    setTodos((prevTodos : TODOI[]): TODOI[] => [...prevTodos, data]);
    window.alert("Todo added sucessfully !!");
  };

  const completeTodo = (id: number): void=>{

    const currentTodo : any = todos.find((todo:TODOI) => todo.id ===id)

    currentTodo.completed = true;

    const updatedTodos : TODOI[] = todos.map((todo:TODOI): TODOI=> todo.id ===id ? currentTodo : todo );

    
    setTodos(updatedTodos);
    window.alert("well Done!!");
  };
  const deleteTodo = (id: number): void=>{

    const updatedTodos : TODOI[] = todos.filter((todo:TODOI): any=> todo.id !==id);

    
    setTodos(updatedTodos);
    window.alert("Deleted Successfull!!");
  };
  return (
    <div className="container">
      <h1 className='text-center my-2'>ToDo App</h1>
      <div className="row flex-column">
        <Form addTodo={addTodo}  />
        <List todos={todos} completeTodo = {completeTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
