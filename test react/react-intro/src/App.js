import React from 'react';
import TodoList from './Todo/TodoList';

function App() {
  const todos = [
    {id: 1, completed: false, title: 'Купить Хлеба'},
    {id: 1, completed: false, title: 'Купить Масло'},
    {id: 1, completed: false, title: 'Купить Молоко'},
  ]

  function toggleTodo(id) {
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  }

  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>

      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  )
  }

export default App;
