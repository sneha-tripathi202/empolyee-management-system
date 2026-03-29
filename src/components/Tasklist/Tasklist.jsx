import React from 'react'
import Accepttask from './Accepttask'
import Newtask from './Newtask'
import Completetask from './Completetask'
import Faildtask from './Faildtask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className=' overflow-x-auto flex flex-nowrap items-center justify-start gap-5 h-[55%] w-full py-5 mt-10'>
     {data.tasks.map((ele)=>{
      if(ele.active){
        return <Accepttask data={ele}/>
      } if(ele.newTask){
        return <Newtask data={ele}/>
      } if(ele.completed){
        return <Completetask data={ele}/>
      } if(ele.failed){
        return <Faildtask data={ele}/>
      }
     })}
      
    </div>
  )
}

export default Tasklist
