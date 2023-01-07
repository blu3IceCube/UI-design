import React from "react";

export default function NavService() {
    return (
        <div className='nav-service'>
            <ul className="navbar-nav services">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">BOOK</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">CHECK IN</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">MANAGE</a>
                </li>
            </ul>
        </div>
    )
}