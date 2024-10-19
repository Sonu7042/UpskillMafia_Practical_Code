import TodoForm from "./component/TodoForm"
import TodoItems from "./component/TodoItem"
import { TodoProvider } from "./context/index"
import { useEffect, useState } from "react"

function App() {


  const [todos, setTodos] = useState([])
  // console.log("todos", todos)

  const addTodo=(todo)=>{
    console.log(todo)
    setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  }

  const updateTodo=(todo, id)=>{
    setTodos((pre)=>pre.map((prevTodo)=>(prevTodo.id===id? todo : prevTodo)))
    
  } 
  const deleteTodo=(id)=>{
    setTodos((pre)=> pre.filter((todo)=> todo.id !==id))
    
  }

  const toggleComplete=(id)=>{
    setTodos((pre)=>pre.map((preTodo)=>preTodo.id ===id? {...preTodo, completed: !preTodo.completed}: preTodo))

    
  }


  useEffect(()=>{
    const todos= JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)
    }
  }, [])


  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo , toggleComplete}}>
   <div className="bg-[#172842] min-h-screen py-8 ">
    <div className=" max-w-2xl  mx-auto shadow-sm  rounded-lg px-4 py-3 text-white ">
    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
   
    <div className="mb-4">
    <TodoForm />
    </div>

    <div className="flex flex-wrap gap-y-3">
      {
        todos.map((todo)=>{
          return(
            <div key={todo.id} className="flex flex-wrap gap-y-3">
              <TodoItems todo={todo}/>

            </div>
          )
        })
      }

    </div>
     
    </div>
  
   </div>
   </TodoProvider>
  )
}

export default App
