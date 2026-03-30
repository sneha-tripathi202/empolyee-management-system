import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   const submitform=(e)=>{
      e.preventDefault()
      handleLogin(email,password)
      setEmail('');
      setPassword('');
   }
    return (
        <div className='w-screen h-screen flex items-center justify-center flex-col'>
            <div><h1 className='text-4xl font-bold m-10'>Employee Management System</h1></div>
            <div className='border-2 rounded-xl border-emerald-600 p-10 '>

                <form onSubmit={(e)=>{
                    submitform(e)
                }} className='flex flex-col'>
                    <input required className="bg-transparent outline-none border-2 border-emerald-600 text-white  text-3xl  placeholder:text-gray-400 m-3 rounded-full px-4 py-3 " type='email' placeholder='enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <input required className="bg-transparent outline-none border-2 border-emerald-600 text-white  text-3xl placeholder:text-gray-400  m-3 rounded-full px-4 py-3" type='password' placeholder='enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    <button className=" outline-none  bg-emerald-600 text-white  text-3xl   m-3 rounded-full px-4 py-3">Log in</button>


                </form>
            </div>
        </div>
    )
}

export default Login
