import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interface/user.interface';

// pontos que podem estar equivocados: this.user, user no constructor, o cast na rows, a public user;

export default class authModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  };

  public async login(email: string, password: string): Promise<User[]> {
    const query = 'SELECT * FROM TypeScriptExpress.Users WHERE email = ? AND password = ?';
    const values = [email, password];
    console.log(values);

    const [rows] = await this.connection.execute(query, values);

    return rows as User[];
  };
};