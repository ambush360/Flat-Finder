import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import  Properties  from './pages/Properties'
import PropertyDetails from './components/PropertyDetails'


const App = () => {
  return (
    <div>
      <Routes>
        <Route  element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/properties' element={<Properties />} />
          
          <Route path='/properties/:id' element={<PropertyDetails />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App