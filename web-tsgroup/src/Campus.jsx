import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrograms } from './Actions/index.js';
import Card from './Card';

export default function Campus() {
    const dispatch = useDispatch();
    const program = useSelector((state) => state.programs);
    console.log(program)

    useEffect(() => dispatch(getPrograms()), [dispatch]);

    return (
        <div>
            <div>
                {
                    program.length ? program.map((p) => (
                        <Card
                            nombre={p.nombre}
                            id={p.id} />
                    )) : <p className='loader'> </p>
                }
            </div>
        </div>
    )
}
