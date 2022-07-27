import React from 'react';
import { Link } from "react-router-dom"
import './navbar.css';
import logo from './Resources/tslogo.PNG';

export default function NavBar() {
    return (
        <nav className='navContainer'>
            <img src={logo} alt='not found' height='60px' />
            <h1>TsGroup University</h1>

            <div className='menuContainer'>
                <button><Link to={'/'} className='linkB'>Inicio</Link></button>
                <button><Link to={'/form'} className='linkB'>Agregar Estudiante</Link></button>
                <button><Link to={'/campus'} className='linkB'>Campus</Link></button>
                <button><Link to={'/program'} className='linkB'> Agregar Programas</Link></button>
            </div>
        </nav>
    )
}
