// @ts-ignore
import Client from '../database'

import dotenv from 'dotenv'

dotenv.config();
export type Product = {
  id?: number;
  name: string,
  price:number,
  category_id:number
}

export class ProductStore {
  async create(p: Product): Promise<Product> {
    try {
      const sql = 'INSERT INTO products (name,price,category_id) VALUES($1,$2,$3) RETURNING *'
      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn
        .query(sql, [p.name,p.price,p.category_id])
      const category = result.rows[0];
      conn.release();
      
      return category
    } catch (err) {
      throw new Error(`Could not add new category  ${p.name}. Error: ${err}`)
    }
  }
   async index(): Promise<Product[]> {
    try {
      const sql = 'SELECT * FROM products '
      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn
        .query(sql)

      const products = result.rows;

      conn.release()
      
      return products
    } catch (err) {
      throw new Error(`Could not execute. Error: ${err}`)
    }
  }
 
  async show(id:string): Promise<Product | null > {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)'

      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn
        .query(sql,[id])

      const product = result.rows[0];

      conn.release()
      return product
    } catch (err) {
      throw new Error(`Could not execute. Error: ${err}`)
    }
  }
 

}