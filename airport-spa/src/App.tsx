import React from 'react'
import './styles/reset.sass'
import './styles/page-wrapper.sass'

import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { AuthPage } from './pages/AuthPage'
import { AirportDetailPage } from './pages/AirportDetailPage'
import { Nav } from './components/Nav'

function App() {
  return (
    <div className="page-wrapper">
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/airport/:id" element={<AirportDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
