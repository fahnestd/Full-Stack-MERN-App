import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navigation = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/create'>Add Exercise</Link>
    </nav>
  )
}

export default Navigation
