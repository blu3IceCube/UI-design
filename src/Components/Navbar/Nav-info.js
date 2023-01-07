import React from "react";

export default function NavInfo() {

    return (
        <div className='nav-info'>
            <ul className="navbar-nav">
                <li className="nav-item info-item">
                    <a className="nav-link active" aria-current="page" href="#">Deals</a>
                </li>
                <li className="nav-item info-item">
                    <a className="nav-link active" href="#">Flying With Us</a>
                </li>
                <li className="nav-item info-item">
                    <a className="nav-link active" href="#">Where We Fly</a>
                </li>
                <li className="nav-item info-item">
                    <a className="nav-link active" aria-current="page" href="#">Shop</a>
                </li>
                <li className="nav-item info-item">
                    <a className="nav-link active" aria-current="page" href="#">FAQ</a>
                </li>
                <li className="nav-item info-item">
                    <a className="nav-link active" aria-current="page" href="#">Fees</a>
                </li>
            </ul>
        </div>
    )
}