const estudiantes = require('../routes/estudiantes.json');

const getEstudiantesService = async () => {
    try {

        console.log(estudiantes);
        return estudiantes
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getEstudiantesService };