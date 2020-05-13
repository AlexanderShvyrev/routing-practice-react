import React from 'react';
import { Link } from '@reach/router';


export default function NavBar() {

    return (
        <nav className="navbar bg-dark">
            <h1>Routing Practice</h1>
            <ul>
                <li>
                    <Link to='/'>Main</Link>
                </li>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                {/* <li>
                    <Link to={`/${num}`}>Number</Link>
                </li> */}
                {/* <li>
                    <Link to='/about'>Color</Link>
                </li>
                <li>
                    <Link to='/about'>Word</Link>
                </li> */}
            </ul>
        </nav>
    )
}
