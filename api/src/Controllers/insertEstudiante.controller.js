const { insertEstudianteService } = require('../Services/InsertEstudiante.service');

const insertEstudianteController = async (req, res) => {
    try {
        const { nombre, cedula, email, telefono, fecha_creacion, id_usuario_creacion } = req.body;
        const insertAllEstudiante = await insertEstudianteService(nombre, cedula, email, telefono, fecha_creacion, id_usuario_creacion);
        res.status(200).json(insertAllEstudiante);
    }
    catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    };
};

module.exports = {
    insertEstudianteController,
}