import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home/home'
import Users from './components/users/users'
import About from './components/about/about'
import Navbar from './components/navbar/navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/users' element={<Users/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
