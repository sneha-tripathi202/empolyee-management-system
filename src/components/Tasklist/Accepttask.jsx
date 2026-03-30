import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authprovider'

const Accepttask = ({data}) => {
  const [complite, setcomplite] = useState("mark as complited")
  const [fail, setFail] = useState("mark as failed ")
  const [showbtn1, setShowbtn1] = useState(true)
  const [showbtn2, setShowbtn2] = useState(true)
  const [userData,setUserData] = useContext(AuthContext)
  

function complited(){
   setcomplite("Task complited")
   setShowbtn2(false)
 const data=userData  
    data.forEach((ele)=>{
         ele.taskCount.completed+=1
        console.log(ele.taskCount.completed);
         })}  
function failed(){
   setFail("Task failed")
   setShowbtn1(false)
   const data=userData  
    data.forEach((ele)=>{
         ele.taskCount.failed+=1
        console.log(ele.taskCount.failed);
         })
}
  return (
    <div>
       <div className='h-full shrink-0 w-75 p-5 bg-yellow-500 rounded-xl items-center '>
       <div className='flex justify-between'> <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'> {data.date}</h4>
        </div><h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-5 '> {data.description}</p>

      <div className='flex justify-between mt-4'>
       
        {showbtn1 && <button onClick={complited} className='bg-green-500 rounded py-1 px-1 m-2 text-sm'>{complite} </button>}
        {showbtn2 &&  <button onClick={failed} className='button bg-red-500 rounded  py-1 px-1 m-2 text-sm'>{fail}</button>}

      </div>
      </div>
      
    </div>
  )
}

export default Accepttask
