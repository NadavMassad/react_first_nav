import React from 'react'
import {Outlet, Link } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Nadav's Zoo</h1>
      <nav style={{borderButtom: 'solid 2px', paddingBottom: '1rem', textAlign: 'center'}}>
      <Link to='/'>Home</Link> | {' '}
      <Link to='/lion'>Lion</Link> | {' '}
      <Link to='/zebra'>Zebra</Link> | {' '}
      <Link to='/giraffe'>Giraffe</Link> | {' '}
      <Link to='/hippo'>Hippo</Link>
      </nav>
      <div style={{textAlign: 'center'}}>
      <Outlet/>
      </div>
      
    </div>
  )
}

export default App