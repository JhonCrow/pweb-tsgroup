const { removeEstudianteservice } = require('../Services/RemoveEstudiante.service.js');

const removeEstudianteController = async (req, res) => {
    try {
        const { id } = req.params;
        const removeEstudiante = await removeEstudianteservice(id);
        res.status(200).json(removeEstudiante);
    } catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    };
};
module.exports = {
    removeEstudianteController,
}