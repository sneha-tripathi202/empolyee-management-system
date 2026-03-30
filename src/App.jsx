import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/Authprovider'
import { getLocalStorage, setLocalStorage } from './utils/Localstorage'

function App() {
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState(null)

 const [loggedInUserData, setLoggedInUserData] = useState(null)
    const [userData,setUserData]= useContext(AuthContext)
 
  useEffect(() => {
   const loggedInUser= localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  
  }, [])
  
  

useEffect(() => {
  // localStorage.clear()
  setLocalStorage()
 getLocalStorage()
}, [])



  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == '123') {
      setUser( 'admin' )
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee)
         { setUser( 'employee')
          setUserName(employee.name) 
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee}))
    }


    }

    else {
      alert('invalid credentials')
    }
  }




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} user={user} /> :( user=="employee" ? <EmployeeDashboard  changeUser={setUser} user={user} userName={userName} data={loggedInUserData}/>:null)}

    </>

  )}


export default App
