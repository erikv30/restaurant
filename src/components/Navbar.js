import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <header className='nav'>
            <div>
            <a href="/" className="brand"><i class="fas fa-hamburger"></i> Erick's Burgers</a>
            </div>
            <div>
                <a href="/cart"><i class="fas fa-shopping-bag"></i></a>
            </div>
        </header>
    )
}

export default Navbar
