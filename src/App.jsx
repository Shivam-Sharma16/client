import React from 'react'
import Navbar from './components/Navbar'
import { MainRoutes } from './routes/Mainroutes'

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App
