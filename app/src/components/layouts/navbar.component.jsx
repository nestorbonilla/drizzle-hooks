import React from 'react'
import { NavLink } from 'react-router-dom'
import drizzleLogo from '../../assets/drizzleLogo.svg'

const Navbar = () => {
    return (
        <nav className="navbar drizzle-navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/"><img src={drizzleLogo} alt="Drizzle Logo" style={{height: '50px'}} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Main</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/secondary">Secondary</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;





