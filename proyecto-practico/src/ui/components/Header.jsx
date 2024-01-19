import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '~/components/header.scss'

export const Header = () => {
    const [mobileMenuStatus, setMobileMenuStatus] = useState(false)

    const toggleMenu = () => {
        setMobileMenuStatus(!mobileMenuStatus)
    }
    return (
        <header className={mobileMenuStatus && 'active-menu' }>
            <nav className="container">
                <button id="nav-icon" className={`only-mobile ${mobileMenuStatus && 'open'}`} onClick={() => toggleMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {/* enlaces de posición */}
                <ul className={mobileMenuStatus && 'active' }>
                    <li>
                        <Link to='#'>Curriculum</Link>
                    </li>
                    <li>
                        <Link to='#'>Portafolio</Link>
                    </li>
                    <li>
                        <Link to='#'>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
