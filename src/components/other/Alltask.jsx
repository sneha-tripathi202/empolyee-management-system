import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider';

const Alltask = () => {
  const authData= useContext(AuthContext)
  console.log(authData.employees);
  
  return (
    <div className='bg-[#1c1c1c] rounded mt-5 p-5 h-48 '>
      <div className='bg-white-400 py-2 mb-2 px-4 flex justify-between rounded'>
        <h2 className='  px-8 py-2 bg-red-600'>Employee Name</h2>
        <h3 className='px-8 py-2 bg-red-600'>New Task</h3>
        <h5 className=' px-8 py-2 bg-red-600'>Active Task</h5>
        <h5 className=' px-8 py-2 bg-red-600'>Completed</h5>
        <h5 className=' px-8 py-2 bg-red-600'>Failed</h5>
        </div>
       <div >
        {authData.employees.map((elem)=>{
        return <div className='bg-[#1c1c1c] py-2 mb-2 px-4 flex justify-between items-center'>
        <h2 className='w-1/5m bg-black-600'> {elem.name}</h2>
        <h3 className='w-1/5m  text-blue-600'>{elem.taskCount.newTask}</h3>
        <h5 className='w-1/5m  text-yellow-600'>{elem.taskCount.active}</h5>
        <h5 className='w-1/5m  text-green-600'>{elem.taskCount.completed}</h5>
        <h5 className='w-1/5m  text-red-600'>{elem.taskCount.failed}</h5>
        </div>
      
        
      })}
      
        </div>
         </div>
  )
}

export default Alltask
