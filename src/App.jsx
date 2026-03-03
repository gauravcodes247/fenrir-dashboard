import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './Layout/AppLayout'
import Dashboard from './Pages/Dashboard'
import LoginPage from './Pages/LoginPage'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard/*" element={<AppLayout />} />
      
    </Routes>
  )
}

export default App
