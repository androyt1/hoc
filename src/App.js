import React from 'react'
import Footer from './components/Footer'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import Details from './components/Details'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/details/:id' element={<Details/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )  
} 

export default App