import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrograms } from './Actions/index.js';
import SearchBar from './SearchBar';
import Card from './Card';

export default function Campus() {
    const dispatch = useDispatch();
    const program = useSelector((state) => state.programs);
    useEffect(() => dispatch(getPrograms()), [dispatch]);

    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <div>
                {
                    program.length ? program.map((p) => (
                        <Card
                            nombre={p.nombre}
                            descripcion={p.descripcion}
                            key={p.id} />
                    )) : <p className='loader'> </p>
                }
            </div>
        </div>
    )
}
