import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';


export default function SideNav() {
    return (
        <nav>
            <h1>Components</h1>
            <ul className="nav-links">
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

