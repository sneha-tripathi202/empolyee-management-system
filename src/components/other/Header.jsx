import React, { useContext, useEffect, useState } from 'react'
import { setLocalStorage } from '../../utils/Localstorage'
import { AuthContext } from '../../context/Authprovider'

const Header = (props) => {
  const [userName, setUserName] = useState('')
    const [userData,setUserData]= useContext(AuthContext)
  
  useEffect(() => {
    
   if(props.user=='admin'){
    setUserName('Admin')
   }else{
       setUserName(props.userName)  }
  
}, [])
  
  
  const logOut=()=>{
    localStorage.setItem('loggedInUser',"")
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello<br/><span className='text-3xl font-semibold'>{userName}👋</span></h1>
      <button onClick={logOut} className='bg-red-500 text-white text-lg font-medium px-3 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
