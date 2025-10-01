import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Service from './service'
import Signup from './login/sigup/indexx'
import Login from './login/sigup'
import Navigation_bar from './components/navigationbar'

export default function App() {
  return (
    <div>
      <Navigation_bar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}




