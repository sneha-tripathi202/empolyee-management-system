import React, { useState } from 'react'

const Header = () => {
  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('admin')
  // }else{
  //   setUsername(data.name)
  // }
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello<br/><span className='text-3xl font-semibold'>username👋</span></h1>
      <button className='bg-red-500 text-white text-lg font-medium px-3 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
