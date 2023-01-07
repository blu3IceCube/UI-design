import React from 'react'
import logo from '../../images/virgin-logo.png'
import NavService from './Nav-service'
import NavInfo from './Nav-info'
import NavLogin from './Nav-login'
import './nav-styles.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" className="d-inline-block align-text-top"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav-main" id="navbarNav">

                    <NavService/>
                    <NavInfo/>
                    <NavLogin/>

                </div>

            </div>
        </nav>
    )
}
