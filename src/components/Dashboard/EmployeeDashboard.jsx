import React from 'react'
import Header from '../other/Header'
import TaskListnumber from '../other/taskListnumber'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) => {

  
  return (
    <div className='p-10 bg-#222 h-screen'>
      <Header changeUser={props.changeUser} Data={props.data} userName={props.userName} />
      <TaskListnumber data={props.data} />
      <Tasklist data={props.data} />

    </div>
  )
}

export default EmployeeDashboard
