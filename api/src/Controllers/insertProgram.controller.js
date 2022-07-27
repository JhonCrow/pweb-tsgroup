const { insertProgramService } = require('../Services/InsertProgram.service');

const insertProgramController = async (req, res) => {
    try {
        const { nombre, descripcion, fecha_creacion, id_usuario_creacion } = req.body;
        const insertAllProgram = await insertProgramService(nombre, descripcion, fecha_creacion, id_usuario_creacion);
        res.status(200).json(insertAllProgram);
    }
    catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    }; 7

};

module.exports = {
    insertProgramController,
}