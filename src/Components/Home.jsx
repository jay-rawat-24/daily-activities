/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react'
import Tasks from './Tasks'

const Home = () => {

  const initialarr = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []

  const[tasks,setTasks] = useState(initialarr)
  const[title,setTitle] = useState("")
  const[description,setDescription] = useState("")

  const submithandler  = (e) => { 
    e.preventDefault()
    setTasks([...tasks,{title,description}])
    setDescription("")
    setTitle("")
  }
  
  const deletetask = (index) =>{
    const filterarr = tasks.filter((val,i) => {
      return i !== index
    })
    setTasks(filterarr)
  }

  useEffect(() => {
      localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  return (
    <div className='container'>
      <h1>NOTES</h1>
      <form onSubmit={submithandler}>
        <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

        <button type="submit">Add</button>
      </form>
      {tasks.map((elem,index) => (
      <Tasks key={index} 
      title = {elem.title}
       description={elem.description}
       deletetask = {deletetask}
       index={index}/>))}
    </div>
  )
}

export default Home
