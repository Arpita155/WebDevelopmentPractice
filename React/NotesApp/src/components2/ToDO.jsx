import React from 'react'
import { useState } from 'react'

export default function ToDO() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  function addTodo(){
    if(input.trim()=="") return
    let temp = [...todos]    // It makes a new copy of the list. This copy lets you change data safely without breaking React rules.
    let id = Math.floor(Math.random()*1000000)
    temp.push({id : id , name : input, completed : false})
    setTodos(temp)
    setInput("")
  }

  function deleteTodo(id){
    let temp = todos.filter((todo)=>todo.id != id);
    setTodos(temp)
  }
    
  function handleCheck(e, id){
    let temp = todos.map((todo)=>{
      if(todo.id == id){
        todo.completed = !todo.completed;
      }
      return todo;
    })

    setTodos(temp)
  }

  return (
    <div>
      <center><h2 className='todo-heading'>TO DO App</h2></center><br />

      <div className='todo-div'>
        <input type="text" className='todo-input' onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button onClick={()=>addTodo()} className='todo-btn'>Add</button>
      </div>

      <div>
        {
          todos.map((todo)=> <div  key={todo.id} className='todo'>
              <input type="checkbox" name="" id="" className='input2' checked={todo.completed} onChange = {(e)=>{handleCheck(e,todo.id)}}/>

              <span className={`todo-name ${todo.completed ? "check" : ""}`}>{todo.name}</span>

              <button className='' onClick={()=>deleteTodo(todo.id)}><img  className='image'  src="https://cdn-icons-png.flaticon.com/512/484/484662.png" alt="" /></button>
          </div>)
        }
      </div>

    </div>
  )
}
