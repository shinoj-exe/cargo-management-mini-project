import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <div>
            <header >
                <nav>
                    <div className="logo">
                        <a href="/">

                        Cargo.One
                        </a>
                    </div>
                    <ul class="nav-list">
                        <NavLink to="/"><li className="nav-items regular16">Home</li></NavLink>
                        <NavLink to="/about"><li className="nav-items regular16">About</li></NavLink>
                        <NavLink to="/login"><li className="nav-items regular16">Login</li></NavLink>
                        <NavLink to="/contact"><li className="nav-items regular16">Contact</li></NavLink>
                        <NavLink to="/adminlogin"><li className="nav-items regular16">Admin</li></NavLink>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;