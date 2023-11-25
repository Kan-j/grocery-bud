import React from 'react'

const SingleItem = ({item, removeTodoItem, editItem}) => {
    const {task}  = item;
    
  return (
    <section className='flex items-center bg-slate-100 py-2 px-2 mb-2 rounded-md justify-between'>
       <article className='flex gap-2 items-center'>
        <input type="checkbox" className='w-4 h-4 rounded-md outline-none border-none' name="" id="" checked={item.completed} onChange={()=> {editItem(item.id)}} />
        <h1 className='text-lg text-gray-900 font-medium line-clamp-1 w-52' style={{textDecoration:`${item.completed? 'line-through':'none'}`}}>{task}</h1>
       </article>
       
        <button onClick={()=> removeTodoItem(item.id)} className='bg-red-700 px-2 py-1 rounded-md text-white'>Delete</button>
    </section>
  )
}

export default SingleItem