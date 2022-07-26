const { nameEstudianteService } = require('../Services/NametEstudiante.service.js');

const nameEstudianteController = async (req, res) => {
    try {
        const { nombre } = req.body;
        console.log(nombre)
        const getNameEstudiante = await nameEstudianteService(nombre);
        res.status(200).json(getNameEstudiante);
    }
    catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    };
};

module.exports = {
    nameEstudianteController,
}