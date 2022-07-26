import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getStudents } from './Actions';
import SearchBar from './SearchBar';
import Card from './Card';

export default function Home() {
    const dispatch = useDispatch();
    const stud = useSelector((state) => state.students);
    console.log(stud)

    useEffect(() => dispatch(getStudents()), [dispatch]);

    return (
        <div>
            <div>
                <SearchBar />
            </div>

            <div>
                {
                    stud.length ? stud.map((s) => (
                        <Card
                            nombre={s.nombre}
                            id={s.id} />
                    )) : <p className='loader'> </p>
                }
            </div>
        </div>
    );
};