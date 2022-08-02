import React, {useState,useRef, useEffect} from 'react';
import Todolist from "./Todolist";
import { v4 as uuidv4} from 'uuid'
const Local_storage_key = 'todoApp.todos'
function App() {
  const [todos,setTodos] =useState([])
  const todoNameRef = useRef()
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(Local_storage_key))
    if (storedTodos) setTodos(storedTodos)


  }, [])
  useEffect(() => {
    localStorage.setItem(Local_storage_key, JSON.stringify(todos))

  
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id===id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleClearTodos(e){
    const newTodos = todos.filter(todos => !todos.complete)
      setTodos(newTodos)
  }

  function handleAddTodo(e){
     const name = todoNameRef.current.value
     if (name=== '') return 
     setTodos(prevTodos =>{
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
     })
     todoNameRef.current.value = null

  }
  return (
    <>    
      <Todolist  todos = {todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type = "text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick = {handleClearTodos}>Clear Completed Todos</button>
      
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      
    </>
    )
  
}

export default App;
