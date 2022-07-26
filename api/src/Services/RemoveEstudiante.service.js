const estudiantes = require('../routes/estudiantes.json');
const _ = require('underscore');

const removeEstudianteservice = async (id) => {
    try {
        if (!id) {
            console.log('El estudiante no puede ser borrado');
            throw new Error('El estudiante no puede ser borrado')
        } else if (id) {
            const index = estudiantes.findIndex(el => el.id == id);
            estudiantes.splice(index, 1);
            return estudiantes;
        };
    } catch (error) {
        console.log(error);
        throw error;
    };
};

module.exports = {
    removeEstudianteservice
}