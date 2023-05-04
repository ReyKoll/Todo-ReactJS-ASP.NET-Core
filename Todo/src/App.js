import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([])
  const API = 'https://localhost:7021'

  const fetchTodosAPI = async () => {
    const res = await fetch(`${API}/TodoItems`)
    const todos = await res.json()
    setTodos(todos)
  }

  useEffect(() => {
    fetchTodosAPI()}, [])

    const addTodo = async (text) => {
      const res = await fetch(`${API}/TodoItems`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({label: text})

      })
      const newTodo = await res.json()
      setTodos([...todos, newTodo])
    }

    const removeTodo = async (id) => {
      await fetch(`${API}/TodoItems/${id}`, {method: 'DELETE'})
      setTodos(todos.filter((todo) => todo._id !== id))
    }

    const updateTodo = async (id, newText) => {
      const res = await fetch(`${API}/TodoItems/${id}`,
      {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({label: newText})
      })
      const upTodo = await res.json()

      setTodos(todos.map((todo) => todo._id === id ? {...todo, label: upTodo.label} : todo ))
    }

    const toggleTodo = async (id) => {
      const findTodo = todos.find((todo) => todo._id === id)
      const isUpdatedTodo = { ...findTodo, isDone: !findTodo.isDone }

      const res = await fetch(`${API}/TodoItems/${id}`,
      {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isUpdatedTodo)
      })

      setTodos(todos.map((todo) => todo._id === id ? isUpdatedTodo : fetchTodosAPI))
    }

    return (
      <div className="App">
        <header>
          <h1>ToDos: {todos.length}</h1>
        </header>
        <div>
          <TodoForm onAdd={addTodo} />
          <TodoList 
            todos={todos}
            onRemove={removeTodo}
            onUpdate={updateTodo}
            onToggle={toggleTodo}
          />
        </div>
      </div>
    )
}

export default App;
