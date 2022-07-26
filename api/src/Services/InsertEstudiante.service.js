const estudiantes = require('../routes/estudiantes.json');

const insertEstudianteService = async (nombre, cedula, email, telefono, fecha_creacion, id_usuario_creacion) => {
    try {
        if (!nombre && !cedula && !telefono) {
            console.log('El estudiante no puede ser creado');
            throw new Error('El estudiante no puede ser creado');
        }
        const id = estudiantes.length + 1;
        const newEstudiante = {
            id: id,
            nombre: nombre,
            cedula: cedula,
            email: email,
            telefono: telefono,
            fecha_creacion: fecha_creacion,
            id_usuario_creacion: id_usuario_creacion,
        };
        estudiantes.push(newEstudiante);
        console.log(newEstudiante);
        return newEstudiante;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

module.exports = {
    insertEstudianteService
}