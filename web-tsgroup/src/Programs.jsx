import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProgram } from './Actions/index.js';

function validate(input) {
    let errors = {};
    console.log(errors);
    if (!input.nombre) {
        errors.nombre = 'El nombre es requerido.';
    } else if (input.nombre.length > 30) {
        errors.nombre = 'no debe exceder las 30 letras';
    } else if (!/^[A-Z ]+$/i.test(input.nombre)) {
        errors.nombre = 'Solo pueden ser letras';
    };
    if (!input.descripcion) {
        errors.descripcion = 'Debe especificar una descripcion';
    };

    if (!input.fecha_creacion) {
        errors.fecha_creacion = 'Debe seleccionar la fecha'
    };

    return errors;
};

export default function Programs() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        nombre: '',
        descripcion: '',
        fecha_creacion: '',
        id_usuario_creacion: '',
    });

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    };


    function handleSubmit(e) {
        e.preventDefault();
        if (!input.nombre || !input.descripcion || !input.fecha_creacion) {
            alert('¡Algo faltó! Debes llenar todos los campos.');
        } else {
            dispatch(postProgram(input));
            alert('¡Felicidades! Programa creado con exito');
            setInput({
                nombre: '',
                descripcion: '',
                fecha_creacion: '',
                id_usuario_creacion: '',
            })
        };
    };

    return (
        <div className='formContainer'>
            <h1>Agrega un programa</h1>

            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Nombre: </label>
                    <input
                        type='text'
                        name='nombre'
                        value={input.nombre}
                        onChange={e => handleInputChange(e)}
                        className='placeHolder' />
                    {errors.nombre && (<p className='alertError'>{errors.nombre}</p>)}
                </div>

                <div>
                    <label>Descripcion: </label>
                    <input
                        type='text'
                        name='descripcion'
                        value={input.descripcion}
                        onChange={e => handleInputChange(e)}
                        className='placeHolder' />
                    {errors.descripcion && (<p className='alertError'>{errors.descripcion}</p>)}
                </div>

                <div>
                    <label>Fecha de creación: </label>
                    <input
                        type='date'
                        name='fecha_creacion'
                        value={input.fecha_creacion}
                        onChange={e => handleInputChange(e)}
                        className='placeHolder' />
                    {errors.fecha_creacion && (<p className='alertError'>{errors.fecha_creacion}</p>)}
                </div>

                <div>
                    <label>Id Programa: </label>
                    <input
                        type='number'
                        name='id_usuario_creacion'
                        value={input.id_usuario_creacion}
                        onChange={e => handleInputChange(e)}
                        className='placeHolder' />
                </div>

                <button
                    type='Submit'
                    className='createBtn'
                >Crear</button>
            </form>
        </div>
    )
}
