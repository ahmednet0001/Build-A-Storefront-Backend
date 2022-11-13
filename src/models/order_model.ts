// @ts-ignore
import Client from '../database';

import dotenv from 'dotenv';

dotenv.config();
export type Order = {
  id?: number;

  order_status: string;
  user_id: number;
};
export type OrderDetails = {
  id?: number;

  quantity: number;
  order_id: string;
  product_id:string
};

export class OrderStore {
  async create(o: Order): Promise<Order> {
    try {
      const sql =
        'INSERT INTO orders (order_status,user_id) VALUES($1,$2) RETURNING *';
      // @ts-ignore
      const conn = await Client.connect();
      // Store hash in the database

      const result = await conn.query(sql, [o.order_status, o.user_id]);

      const order = result.rows[0];

      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not add new order. Error: ${err}`);
    }
  }
  async index(): Promise<Order[]> {
    try {
      const sql = 'SELECT * FROM orders ';
      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql);

      const orders = result.rows;

      conn.release();

      return orders;
    } catch (err) {
      throw new Error(`Could not execute. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Order> {
    try {
      const sql = 'SELECT * FROM orders WHERE id=($1)';

      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);

      const order = result.rows[0];

      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not execute. Error: ${err}`);
    }
  }

  async addProduct(quantity: number, orderId: string, productId: string): Promise<OrderDetails> {
    try {
      const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *'
      //@ts-ignore
      const conn = await Client.connect()

      const result = await conn
          .query(sql, [quantity, orderId, productId])

      const order = result.rows[0]

      conn.release()
      

      return order
    } catch (err) {
      throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`)
    }
  }
}
