const programas = require('../routes/programas.json');

const getProgramsService = async () => {
    try {

        console.log(programas);
        return programas
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getProgramsService };