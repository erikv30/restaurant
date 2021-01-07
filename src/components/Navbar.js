import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import './Navbar.css'

function Navbar() {
    const [{ cartItems }] = useStateValue();
    return (
        <header className='nav'>
            <div>
            <Link to="/" className="brand"><i className="fas fa-hamburger"></i> Erick's Burgers</Link>
            </div>
            <div className='basket-content'>
                <Link to="/cart"><i className="fas fa-shopping-bag"></i> <span className='basket'>{cartItems?.length}</span></Link>
                
            </div>
        </header>
    )
}

export default Navbar
