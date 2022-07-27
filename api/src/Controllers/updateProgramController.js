const { updateProgramService } = require('../Services/UpdateProgram.service.js');
const _ = require('underscore');

const updateProgramController = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, fecha_creacion, id_usuario_creacion } = req.body;
        const updateProgram = await updateProgramService(id, nombre, descripcion, fecha_creacion, id_usuario_creacion);

        res.status(200).json(updateProgram);

    } catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    };
};

module.exports = {
    updateProgramController
}