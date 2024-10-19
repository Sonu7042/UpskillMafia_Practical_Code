import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {


    const [data, setData]=useState("")
    const dispatch= useDispatch()


    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodo(data))
        console.log(data)
        setData("")

    }
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <input type="text" placeholder='Enter here' value={data} onChange={(e)=>setData(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
      
    </div>
  )
}

export default AddTodo
