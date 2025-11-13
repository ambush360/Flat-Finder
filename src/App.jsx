import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './pages/Layout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route  element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App