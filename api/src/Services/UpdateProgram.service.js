const programas = require('../routes/programas.json');
const _ = require('underscore');

const updateProgramService = async (id, nombre, descripcion, fecha_creacion, id_usuario_creacion) => {
    try {
        if (!id && !nombre && !descripcion) {
            console.log('El programa no puede ser actualizado');
            throw new Error('El programa no puede ser actualizado')
        } else {
            if (id && nombre && descripcion && fecha_creacion && id_usuario_creacion) {
                _.each(programas, (programa, i) => {
                    if (programa.id === id) {
                        programa.nombre = nombre;
                        programa.descripcion = descripcion;
                        programa.fecha_creacion = fecha_creacion;
                        programa.id_usuario_creacion = id_usuario_creacion;
                    }
                });
            };
        };
        return programas;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

module.exports = {
    updateProgramService,
}