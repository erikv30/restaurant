import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="row-foot">
                    <ul className='foot-socials'>
                        <li className='col'>
                            <i className="fab fa-twitter"></i>
                        </li>
                        <li className='col'>
                            <i className="fab fa-facebook"></i>
                        </li>
                        <li className='col'>
                            <i className="fab fa-instagram"></i>
                        </li>
                        <li className='col'>
                            <i className="fab fa-linkedin"></i>
                        </li>
                        <li className='col'>
                            <p className='col-sm'>
                                &copy;{new Date().getFullYear()} Erick Esteban Vega Vargas
                            </p>
                        </li>
                    </ul>
            </div>
        </footer>
    )
}

export default Footer
