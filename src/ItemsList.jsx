import React from 'react'
import SingleItem from './SingleItem'

const ItemsList = ({items, removeTodoItem, editItem}) => {
    
  return (
    <section className='w-80 mt-4'>
        {items.map((item)=> {
            return <SingleItem key={item.id} item={item} removeTodoItem={removeTodoItem} editItem={editItem} />
        })}
    </section>
  )
}

export default ItemsList