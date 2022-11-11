// @ts-ignore
import Client from '../database';

import dotenv from 'dotenv';

dotenv.config();
export type Category = {
  id?: number;
  name: string;
};

export class CategoryStore {
  async create(c: Category): Promise<Category> {
    try {
      const sql = 'INSERT INTO categories (name) VALUES($1) RETURNING *';
      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql, [c.name]);
      const category = result.rows[0];
      conn.release();
      return category;
    } catch (err) {
      throw new Error(`Could not add new category  ${c.name}. Error: ${err}`);
    }
  }
  async index(): Promise<Category[]> {
    try {
      const sql = 'SELECT * FROM categories ';
      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql);

      const categories = result.rows;

      conn.release();

      return categories;
    } catch (err) {
      throw new Error(`Could not execute. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Category | null> {
    try {
      const sql = 'SELECT * FROM categories WHERE id=($1)';

      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);

      const category = result.rows[0];

      conn.release();
      return category;
    } catch (err) {
      throw new Error(`Could not execute. Error: ${err}`);
    }
  }
}
