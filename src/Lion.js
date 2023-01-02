import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Lion = () => {
    return (
        <div>
            <h1>Lion</h1>
            <Link to='img'>Click To Display Image</Link>
            <Outlet/>
        </div>
    )
}

export default Lion