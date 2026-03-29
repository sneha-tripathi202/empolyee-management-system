import React from 'react'
import Header from '../other/Header'
import TaskListnumber from '../other/taskListnumber'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = ({data}) => {

  
  return (
    <div className='p-10 bg-#222 h-screen'>
      <Header  data={data} />
      <TaskListnumber data={data} />
      <Tasklist data={data} />

    </div>
  )
}

export default EmployeeDashboard
