import React from 'react'
import TodoItem from "./TodoItem"
export default function Todos(props) {
let mystyle={
  minHeight:"100vh",
  margin:"10px auto"

}
  return (
    <div className='container my-3' style={mystyle}>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.map((todo)=>{
        return  <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })}
    </div>
  )
}
