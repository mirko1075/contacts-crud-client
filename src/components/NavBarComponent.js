import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarComponent() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Contacts manager</Link>
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/" className="nav-link">List</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create" className="nav-link">Create</Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}
