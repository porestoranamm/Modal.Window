import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './context'

function App() {
  let [todos, setTodos] = React.useState( [
    {id: 1, completed: false, title: 'Купить Хлеба'},
    {id: 1, completed: false, title: 'Купить Масло'},
    {id: 1, completed: false, title: 'Купить Молоко'},
  ])

  function toggleTodo(id) {
    setTodos() 
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  return (
    <Context.Provider value={{}}>
    <div className='wrapper'>
      <h1>React tutorial</h1>

      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
    </Context.Provider>
  )
  }

export default App;
