import React, { useState } from 'react';
import './App.css';

import './components/TodoRowItem';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodo])
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber
    });
    setTodos(filtered);
  }
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Gardening', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Dinner', rowAssigned: 'User One' },
    { rowNumber: 4, rowDescription: 'Charging phone', rowAssigned: 'User Three' }
  ])
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button className='btn btn-primary'>
            Add New Todo
          </button>
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
