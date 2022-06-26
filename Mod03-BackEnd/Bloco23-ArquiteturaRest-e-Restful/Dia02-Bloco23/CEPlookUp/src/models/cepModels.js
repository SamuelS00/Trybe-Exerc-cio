const connection = require('../helpers/connection');

const findCepAddress = async (cep) => {
    const treatedCep = cep.replace('-', '');

    const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?;';

    const [result] = await connection.execute(query, [treatedCep]);

    return result;
}

module.exports = { 
    findCepAddress
}