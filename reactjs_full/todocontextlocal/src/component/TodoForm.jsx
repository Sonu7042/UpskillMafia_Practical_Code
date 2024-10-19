import React, { useState } from 'react'
import {useTodo} from '../context/TodoContext'


const TodoForm = () => {

    const {addTodo} = useTodo()
   
    const [todo, setTodo]=useState("")


    const add=(e)=>{
        e.preventDefault()

        if(!todo) return
        addTodo({ todo, completed: false})
        
        setTodo("")
       
    }

  return (
   
        <form  onSubmit={add} className='flex'>
            <input
            className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
             type="text" 
             placeholder='write Todo'
             value={todo}
             onChange={(e)=>setTodo(e.target.value)}

              />
            <button  type='Submit' className='rounded-r-lg bg-green-600 text-white shrink-0 px-5'>Add</button>

        </form>

   
  )
}

export default TodoForm
