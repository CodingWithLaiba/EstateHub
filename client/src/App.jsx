import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingIn from './pages/SingIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/sign-in' element ={<SingIn/>}/>
        <Route path='/sign-up' element ={<SignUp/>}/>
        <Route path='/profile' element ={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
