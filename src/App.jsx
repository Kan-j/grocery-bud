import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Form';
import { nanoid } from 'nanoid';
import ItemsList from './ItemsList';
// import './App.css'

const setLocalStorage = (item)=> {
  localStorage.setItem('list', JSON.stringify(item || []))
}


function App() {
  const defaultList = JSON.parse(localStorage.getItem('list') || '[]')
  const [items, setItems] = useState(defaultList);

  const addTodoItem = (item)=>{
    const newItem = {
      id: nanoid(),
      task: item,
      completed: false
    }
    const newList = [...items, newItem]

    setLocalStorage(newList)
    setItems(newList)
  }

  const removeTodoItem = (itemId)=> {
    const newList = items.filter((item)=> item.id !== itemId)
    setLocalStorage(newList)
    setItems(newList)
  }

  const editItem = (itemId) => {
    const newList = items.map((item)=>{
      if(item.id === itemId){
        const isCompleted = item.completed;
        const newItem = {...item, completed: !isCompleted}
        console.log(newItem);
        return newItem;
      }
      return item;
    })
    setLocalStorage(newList)
    setItems(newList)
  }
  return (
    <>
      <section className='flex flex-col min-h-screen items-center justify-center'>
        <Form addTodoItem={addTodoItem} />
        <ItemsList items={items} removeTodoItem={removeTodoItem} editItem={editItem} />
      </section>
    </>
  )
}

export default App
