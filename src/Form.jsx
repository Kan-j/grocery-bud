import React, { useState } from 'react'

const Form = ({addTodoItem}) => {
    const [item, setItem] = useState('')

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(item){
          addTodoItem(item)
          setItem('')
        }
        
       
    }

  return (
    <section className='flex flex-col w-96 items-center justify-center'>
        <h1 className='text-2xl font-semibold mb-4'>Grocery Bud</h1>
        <form onSubmit={handleSubmit} className='flex'>
            <input type="text" className='py-1 rounded-md px-2 bg-white outline-none' value={item} onChange={(e)=> setItem(e.target.value)} />
            <button type='submit' className='bg-gray-600 text-white px-2 py-1 rounded-md'>Add Items</button>
        </form>
    </section>
  )
}

export default Form