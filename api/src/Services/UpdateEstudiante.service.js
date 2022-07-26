const estudiantes = require('../routes/estudiantes.json');
const _ = require('underscore');

const updateEstudianteService = async (id, nombre, cedula, email, telefono, fecha_creacion, id_usuario_creacion) => {
    try {
        if (!id && !nombre && !cedula && !email) {
            console.log('El estudiante no puede ser actualizado');
            throw new Error('El estudiante no puede ser actualizado')
        } else {
            if (id && nombre && cedula && email && telefono && fecha_creacion && id_usuario_creacion) {
                _.each(estudiantes, (estudiante, i) => {
                    if (estudiante.id === id) {
                        estudiante.nombre = nombre;
                        estudiante.cedula = cedula;
                        estudiante.email = email;
                        estudiante.telefono = telefono;
                        estudiante.fecha_creacion = fecha_creacion;
                        estudiante.id_usuario_creacion = id_usuario_creacion;
                    }
                });
            };
        };
        return estudiantes;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

module.exports = {
    updateEstudianteService,
}