import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
    
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <NavLink to='/dog'>Dog</NavLink>
            <NavLink to='/cat'>cat</NavLink>
        </div>
    )
}
