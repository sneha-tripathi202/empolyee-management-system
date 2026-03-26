import React from 'react'
import Header from '../other/Header'
import Createtask from '../other/Createtask'
import Alltask from '../other/Alltask'

const AdminDashboard = () => {
    return (
        <div className='h-screen  w-full p-10 '>
            <Header />
           <Createtask/>
           <Alltask/>
        </div>
    )
}

export default AdminDashboard
