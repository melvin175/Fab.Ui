import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';


export default function SideNav() {
    return (
        <nav>
            <ul div class="getting-started">
            <h1>Getting Started</h1>
            <Link to="/introduction">
                <li>Introduction</li>
            </Link>
            <Link to="/download">
                <li>Download</li>
            </Link>
            </ul>
            <ul className="nav-links">
            <h1>Components</h1>
                <Link to="/alert">
                    <li>Alert</li>
                </Link>
                <Link to="/avatar">
                    <li>Avatar</li>
                </Link>
                <Link to="/badge">
                    <li>Badge</li>
                </Link>
                <Link to="/button">
                    <li>Button</li>
                </Link>
                <Link to='/card'>
                    <li>Card</li>
                </Link>
                <Link to="/form">
                    <li>Form</li>
                </Link>
                <Link to="/modal">
                    <li>Modal</li>
                </Link>
            </ul> 
        </nav>
    )
}

