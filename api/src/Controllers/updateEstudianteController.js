const { updateEstudianteService } = require('../Services/UpdateEstudiante.service.js');
const _ = require('underscore');

const updateEstudianteController = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, cedula, email, telefono, fecha_creacion, id_usuario_creacion } = req.body;
        const updateEstudiante = await updateEstudianteService(id, nombre, cedula, email, telefono, fecha_creacion, id_usuario_creacion);

        res.status(200).json(updateEstudiante);

    } catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    };
};

module.exports = {
    updateEstudianteController
}