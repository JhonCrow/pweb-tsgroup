const programas = require('../routes/programas.json');

const insertProgramService = async (nombre, descripcion, fecha_creacion, id_usuario_creacion) => {
    try {
        if (!nombre && !descripcion) {
            console.log('El programa no puede ser creado');
            throw new Error('El programa no puede ser creado');
        }
        const id = programas.length + 1;
        const newProgram = {
            id: id,
            nombre: nombre,
            descripcion: descripcion,
            fecha_creacion: fecha_creacion,
            id_usuario_creacion: id_usuario_creacion,
        };
        programas.push(newProgram);
        console.log(newProgram);
        return newProgram;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

module.exports = {
    insertProgramService
}