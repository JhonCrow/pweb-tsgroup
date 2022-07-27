import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postStudent } from './Actions/index.js';
import './form.css';

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
    if (!input.cedula) {
        errors.cedula = 'Debe especificar la cedula';
    };
    if (!input.email) {
        errors.email = 'El email es requerido.';
    } else if (input.Email.length > 30) {
        errors.email = 'no debe exceder las 30 caracteres';
    } else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(input.Email)) {
        errors.email = 'No es un correo valido';
    }
    if (!input.telefono) {
        errors.telefono = 'Debe especificar el telefono'
    };
    if (!input.fecha_creacion) {
        errors.fecha_creacion = 'Debe seleccionar la fecha'
    };

    return errors;
};

export default function Form() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        cedula: '',
        nombre: '',
        email: '',
        telefono: '',
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
        if (!input.nombre || !input.cedula || !input.email || !input.telefono || !input.fecha_creacion) {
            alert('¡Algo faltó! Debes llenar todos los campos.');
        } else {
            dispatch(postStudent(input));
            alert('¡Felicidades! Estudiante creado con exito');
            setInput({
                cedula: '',
                nombre: '',
                email: '',
                telefono: '',
                fecha_creacion: '',
                id_usuario_creacion: '',
            })
        };
    };

    return (
        <div className='formContainer'>
            <h1>Agrega un estudiante</h1>

            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Cedula: </label>
                    <input
                        type='number'
                        name='cedula'
                        value={input.cedula}
                        onChange={e => handleInputChange(e)}
                        className='placeHolder' />
                    {errors.cedula && (<p className='alertError'>{errors.cedula}</p>)}
                </div>

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
                    <label>Email: </label>
                    <input
                        type='text'
                        name='email'
                        value={input.email}
                        onChange={e => handleInputChange(e)}
                        className='placeHolder' />
                    {errors.email && (<p className='alertError'>{errors.email}</p>)}
                </div>

                <div>
                    <label>Telefono </label>
                    <input
                        type='number'
                        name='telefono'
                        value={input.telefono}
                        onChange={e => handleInputChange(e)}
                        className='placeHolder' />
                    {errors.telefono && (<p className='alertError'>{errors.telefono}</p>)}
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
                    <label>Id usuario: </label>
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
