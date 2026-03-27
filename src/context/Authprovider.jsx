import React, { createContext } from 'react'
export const AuthContext =createContext()

const Authprovider = ({children}) => {
  return (
    <div>
      <AuthContext.Provider value={'sanaya'}> 
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default Authprovider
