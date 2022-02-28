import React from 'react';
import './App.css';
import Form from './Component/Form/Form';

const App = () => {
  return (
    <div className="container">
      <h1 className='text-center my-2'>ToDo App</h1>
      <div className="row">
        <Form />
      </div>
    </div>
  );
}

export default App;
