import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
        <h2 style={{color: 'red'}}>Error 404</h2>
        <p>page not found</p>
        <Link to='/'>Back home</Link>
    </div>
  )
}
