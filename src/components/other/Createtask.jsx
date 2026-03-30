import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authprovider'

const Createtask = () => {
    const [title, setTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
 
 const [newTask, setNewTask] = useState({})
   const [userData,setUserData]= useContext(AuthContext)
 
 
   function submitHandler(e){
       e.preventDefault()
      const taskObj = {
    title,
    taskDescription,
    taskDate,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  };

    //    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed :false ,completed:false})
    
    const data=[...userData ]   
    data.forEach((ele)=>{
        if(asignTo==ele.name) {
            ele.tasks.push(taskObj)
            ele.taskCount.newTask+=1
            ele.taskNumber+1
            console.log(ele.tasks.length);

        }
        })
        setUserData(data)
        
   console.log(data);
   
    // localStorage.setItem('employees',JSON.stringify(data))
    setTitle('')
    setTaskDescription('')
   setTaskDate('')
     setAsignTo('')
     setCategory('')
 }
  return (
    <div>
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded '>
                <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-wrap  w-full  items-start justify-between'>
                    <div className='w-1/2'><div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={title}
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }}  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border' type="text" placeholder='Make a Ui design' /></div>
                        <div><h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={taskDate}
                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border' type="date" /></div>
                    <div><h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input value={asignTo}
                        onChange={(e)=>{
                            setAsignTo(e.target.value) }}className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border' type="text" placeholder='employee name' /></div>
                    <div><h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input  value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border' type="text" placeholder='design,dev etc' /></div></div>
                    
                    <div className='w-2/5 flex flex-col items-start'> <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea value={taskDescription}
                        onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border' name="" id="" cols="30" rows='10'></textarea>
                    
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full '>create task</button></div>
                </form>
            </div>
      
    </div>
  )
}

export default Createtask
