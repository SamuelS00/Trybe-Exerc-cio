import mysql, { Pool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

class Connection {
    private static connection: Pool

    constructor() {
        Connection.connection = mysql.createPool({
            host: process.env.EX_HOST,
            user: process.env.EX_USER,
            password: process.env.EX_PASSWORD,
            database: 'plants_solid',
        })
    }

    public async execute(sql: string, values?: any) {
        const result = await Connection.connection.execute(sql, values);

        return result;
    }
}

export default new Connection()