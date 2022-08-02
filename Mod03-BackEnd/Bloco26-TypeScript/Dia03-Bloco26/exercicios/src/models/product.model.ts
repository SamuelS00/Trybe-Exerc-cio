import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interface/product.interface';

// testar se funciona sem o public

// testar com o this._connection

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  };

  public async getAll(): Promise<Product[]> {
    const query = 'SELECT * FROM TypeScriptExpress.Products'
    const [rows] = await this.connection.execute(query);
    
    return rows as Product[];
  };
};
