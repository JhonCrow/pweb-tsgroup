import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterStudents, filterPrograms } from "./Actions/index.js";
import './searchbar.css';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmit(e) {
        if (!name) {
            alert('¡Oops! No escribiste nada para buscar.');
        };
        dispatch(filterStudents(name))
        setName('');
    };

    function handleClick(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            if (!name) {
                alert('¡Oops! No escribiste nada para buscar.');
            };
            dispatch(filterStudents(name))
            dispatch(filterPrograms(name))
            setName('');
        };
    }

    return (
        <div className="SearchBar">
            <input
                type='text'
                placeholder='Buscar...'
                onChange={e => handleInputChange(e)}
                value={name}
                onKeyDown={e => handleClick(e)}
            />
            <button onClick={e => handleSubmit(e)}>
                buscar
            </button >

        </div>
    );
};
