import React from 'react';
import './navbar.css';
import logo from './Resources/tslogo.PNG';

export default function NavBar() {
    return (
        <nav className='navContainer'>
            <img src={logo} alt='not found' height='60px' />
            <h1>TsGroup University</h1>
            <ul>
                <li><a>Inicio</a></li>
                <li><a>Campus</a></li>
                <li><a>Estudiantes</a></li>
                <li><a>Programa</a></li>
            </ul>
        </nav>
    )
}
