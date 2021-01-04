import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <header className='nav'>
            <div>
            <Link href="/" className="brand"><i class="fas fa-hamburger"></i> Erick's Burgers</Link>
            </div>
            <div className='basket-content'>
                <Link to="/cart"><i className="fas fa-shopping-bag"></i> <span className='basket'>0</span></Link>
                
            </div>
        </header>
    )
}

export default Navbar
