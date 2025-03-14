import './App.css'
import Jobs from './components/Jobs'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import UpdateProfile from './components/UpdateProfile'

function App() {
  return (
    <>
       <Navbar />
    <Routes>
      <Route path='/'element={<Jobs />}/>
      <Route path='/login'element={<Login />}/>
      <Route path='/signup'element={<Signup />}/>
      <Route path='/profile'element={<Profile />}/>
      <Route path='/update-profile'element={<UpdateProfile/>}/>
    </Routes>
    {/* <Home /> */}
    </>
  )
}

export default App
