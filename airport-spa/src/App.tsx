import React from 'react'
import './styles/reset.sass'
import './styles/page-wrapper.sass'

import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { UserDetailPage } from './pages/UserDetailPage/UserDetailPage'
import { Nav } from './components/Nav/Nav'

function App() {
  return (
    <div className="page-wrapper">
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/airport/:id" element={<UserDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
