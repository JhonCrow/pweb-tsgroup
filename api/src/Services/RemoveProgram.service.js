const programas = require('../routes/programas.json');
const _ = require('underscore');

const removeProgramservice = async (id) => {
    try {
        if (!id) {
            console.log('El programa no puede ser borrado');
            throw new Error('El programa no puede ser borrado')
        } else if (id) {
            const index = programas.findIndex(el => el.id == id);
            programas.splice(index, 1);
            return programas;
        };
    } catch (error) {
        console.log(error);
        throw error;
    };
};

module.exports = {
    removeProgramservice
}