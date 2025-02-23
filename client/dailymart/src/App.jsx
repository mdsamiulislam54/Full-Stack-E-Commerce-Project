// Date: 03/18/2021
// Description: Main App component for the DailyMart application

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './componants/Home/Home'
import Login from './componants/Registration/Login'
import Registration from './componants/Registration/Registration'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
