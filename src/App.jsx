import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Main from './Components/MainPage/Main'
import Phone from './Components/PhoneModal/Phone'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Main/>}/>
     </Routes>
     <Phone/>
     <Footer/>
    </>
  )
}

export default App
