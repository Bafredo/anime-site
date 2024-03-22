import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homelist from './pages/Homelist'
import { AppContext } from './context/Content'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <AppContext>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homelist />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
        </Routes>
      </Router>
    </AppContext>
  )
}

export default App
