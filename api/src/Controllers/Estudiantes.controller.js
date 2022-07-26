const { getEstudiantesService } = require('../Services/Estudiantes.service.js');

const getEstudiantesController = async (req, res) => {
    try {
        //const { nombre } = req.query;
        const getAllEstudiantes = await getEstudiantesService();

        res.status(200).json(getAllEstudiantes);
    }
    catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    };
};

module.exports = {
    getEstudiantesController,
}