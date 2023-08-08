
import React, {useState} from 'react'

export default function AddTodo(props) {
    const [title,setTitlte]=useState("");
    const [time,setTime]=useState("");


    const submit=(e)=>{
        e.preventDefault();
        if(!title || !time){
            alert("title or time can't be blank")
        }else{
         props. addTodo(title,time);
         setTitlte("");
         setTime("");

        }


    }
    return (
        <div className='container my-3'>
            <h3>Add Todo item</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="TodoTitle" class="form-label">TodoTitle</label>
                    <input type="text" value={title} onChange={(e)=>{setTitlte(e.target.value)}} class="form-control" id="TodoTitle"  />
                    
                </div>
                <div class="mb-3">
                    <label for="time" class="form-label">time</label>
                    <input type="text" value={time} onChange={(e)=>{setTime(e.target.value)}} class="form-control" id="time" />
                </div>
               
                <button type="submit" class="btn btn-sm btn-success ">Submit</button>
            </form>

        </div>
    )
}
