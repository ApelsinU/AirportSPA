import React from 'react'
import { Link } from 'react-router-dom'
import './nav.sass'

export function Nav() {
  return (
    <nav className="nav">
      Airport
      <Link to="/auth">Auth</Link>
    </nav>
  )
}
