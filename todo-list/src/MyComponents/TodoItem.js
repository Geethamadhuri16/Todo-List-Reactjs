import React from 'react'

export default function TodoItem({todo,onDelete}) {
  if (!todo || !todo.title || !todo.time) {
    return null; // If there's no valid todo data, don't render anything
  }
  return (
    <div>
      
      <h4>{todo.title}</h4>
      <p>{todo.time}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)}>Delete</button> 
      <hr/>
    </div>
  )
}
