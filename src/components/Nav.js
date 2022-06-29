import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div style={{backgroundColor: 'rosybrown', color: 'white'}}>
        <Link to='/'>Logo</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}
