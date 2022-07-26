const estudiantes = require('../routes/estudiantes.json');

const nameEstudianteService = async (nombre) => {
    try {
        if (!nombre) {
            console.log('El estudiante no puede ser encontrado');
            throw new Error('El estudiante no puede ser encontrado');
        }
        console.log(nombre)
        const primera = nombre.charAt(0)
        const resto = nombre.slice(1);

        const name = primera.toUpperCase() + resto;

        const filtro = estudiantes.filter(el => el.nombre === name);

        return filtro

    } catch (error) {
        console.log(error);
        throw error;
    };
};

module.exports = {
    nameEstudianteService
}