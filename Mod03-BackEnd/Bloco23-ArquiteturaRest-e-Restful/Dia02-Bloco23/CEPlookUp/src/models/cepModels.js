const connection = require('../helpers/connection');

const findCepAddress = async (cep) => {
    const treatedCep = cep.replace('-', '');

    const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?;';

    const [result] = await connection.execute(query, [treatedCep]);

    return result;
};

const createCepAddress = async (cep, logadouro, bairro, localidade, uf) => {
    const query = (
       `INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) 
        VALUES (?, ?, ?, ?, ?);`
    );

    await connection.execute(query, [ cep, logadouro, bairro, localidade, uf]);
    
    return { cep, logadouro, bairro, localidade, uf };
};

module.exports = { 
    findCepAddress,
    createCepAddress,
}