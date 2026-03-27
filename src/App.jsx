import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/Authprovider'

function App() {
  const [user, setUser] = useState(null)

const handleLogin=(email,password)=>{
  if(email=="admin@me.com" && password=='123'){
    setUser('admin')
    console.log('this is admin');
    
  }else if(email=='user@me.com'&& password=='123'){
    console.log('this is user');
    setUser('employee')
  }

  else{
    alert('invalid credentials')
  }
}

const data=useContext(AuthContext)

  return (
    <>
    {!user ?<Login handleLogin={ handleLogin}/>:''}   
   {user=='admin'?<AdminDashboard/>:<EmployeeDashboard/>}
    </>
     
  )
}

export default App
