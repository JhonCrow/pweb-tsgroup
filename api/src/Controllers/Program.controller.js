const { getProgramsService } = require('../Services/Programas.service.js');

const getProgramController = async (req, res) => {
    try {
        //const { nombre } = req.query;
        const getAllProgram = await getProgramsService();

        res.status(200).json(getAllProgram);
    }
    catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    };
};

module.exports = {
    getProgramController,
}