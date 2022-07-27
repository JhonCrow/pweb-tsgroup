import React from 'react';
import './card.css';

export default function Card({ nombre, descripcion }) {
    return (
        <div className='card_container'>
            <div className='card'>
                <div className='description'>
                    <h2>{nombre}</h2>
                    <h3>{descripcion}</h3>
                </div>
            </div>
        </div>
    )
};