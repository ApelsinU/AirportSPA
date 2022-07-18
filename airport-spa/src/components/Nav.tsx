import React from 'react'
import { Link } from 'react-router-dom'
import './nav.sass'

export function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/auth">
        Auth
      </Link>
      <Link className="nav__link" to="/airport/1">
        Airport
      </Link>
    </nav>
  )
}
