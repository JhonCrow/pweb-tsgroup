const { removeProgramservice } = require('../Services/RemoveProgram.service.js');

const removeProgramController = async (req, res) => {
    try {
        const { id } = req.params;
        const removeProgram = await removeProgramservice(id);
        res.status(200).json(removeProgram);
    } catch (error) {
        res.status(error.status || 400).json({
            message: error.message || error,
        });
    };
};
module.exports = {
    removeProgramController,
}