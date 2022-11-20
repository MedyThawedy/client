import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Link className='clsAnchorHeader' to='/home'>
            <h1 className='clsLogo'>SILENT MOON</h1>
        </Link>
    )
}

export default Header