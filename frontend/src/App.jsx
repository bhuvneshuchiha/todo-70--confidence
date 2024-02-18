import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// This is just creating a div where we can input our todos. ->  <CreateTodo></CreateTodo>  

function App() {
  const [todos, setTodos] = useState([]);   // -> This 'todos' will contain all the todos and will be used in the re-rendering in the todos.jsx file.

  fetch("http:/localhost/3000/todos")
  .then(async (res) => {
    const json = await res.json;
    setTodos(json.todos);
  })
  
  return (
      <div>
        <CreateTodo></CreateTodo>  

        <Todos todos = {[{   // This todos is being passed like a function argument to the function defind in Todos.jsx
          title : "Get Keyboard",
          description : "Research between Keychron, Ducky and Iquinix",
          completed : false
        }]}></Todos>
    </div>
  )
}

export default App
