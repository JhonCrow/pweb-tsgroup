/* import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import Card from "./Card";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    };

    async function handleSubmit(e) {
        const response = await axios.get('http://localhost:3000/api/estudiantes');
        const filter = response.data.filter(el => el.nombre === name)
        console.log(filter);

        return filter


        
                if (!name) {
                    alert('¡Oops! No escribiste nada para buscar.');
                };
                dispatch(getNameCountries(name))
                    .then(response => {
                        if (response.payload.length === 0) {
                            alert('Lo siento pais no encontrado');
                            dispatch(getCountries());
                        };
                    })
                    .catch(error =>
                        console.log(error)
                    );
                setName(''); 


    };

         function handleClick(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                if (!name) {
                    alert('¡Oops! No escribiste nada para buscar.');
                };
                dispatch(getNameCountries(name))
                    .then(response => {
                        if (response.payload.length === 0) {
                            alert('Lo siento pais no encontrado');
                            dispatch(getCountries());
                        };
                    })
                    .catch(error =>
                        console.log(error)
                    );
                setName('');
            };
        } 

    return (
        <div className="SearchBar">
            <input
                type='text'
                placeholder='Buscar...'
                onChange={e => handleInputChange(e)}
            />
            <button className="searchButton" type='submit' onClick={e => handleSubmit(e)}>
                Buscar
            </button>

        </div>
    );
};
 */


import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterStudents } from "./Actions/index.js";

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
