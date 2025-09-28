import { useState } from 'react'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'

function App() {

  return (
    <>
      <TodoList/>
      <Profile/>
      <ShoppingList/>
    </>
  )
}

export default App
