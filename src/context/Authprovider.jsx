import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/Localstorage'
export const AuthContext =createContext()

const Authprovider = ({children}) => {
    const [userData, setUserData] = useState(null)
useEffect(()=>{
    const {employees,admin}=getLocalStorage()
    setUserData({employees,admin})
},[])    
  return (
    <div>
      <AuthContext.Provider value={userData}> 
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default Authprovider
