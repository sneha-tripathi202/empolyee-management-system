import React from 'react'
import Header from '../other/Header'
import TaskListnumber from '../other/taskListnumber'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-#222 h-screen'>
      <Header/>
      <TaskListnumber/>
      <Tasklist/>

    </div>
  )
}

export default EmployeeDashboard
