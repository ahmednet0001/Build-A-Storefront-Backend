// @ts-ignore
import Client from '../database'

import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config();
export type User = {
  id?: number;
  first_name: string,
  last_name: string,
  password:string
}
export type SecureUser = {
  id?: number;
  first_name: string,
  last_name: string,
 
}



export class UserStore {
  async create(u: User): Promise<SecureUser> {
    try {
      const sql = 'INSERT INTO users (first_name,last_name,password) VALUES($1,$2,$3) RETURNING *'
      // @ts-ignore
      const conn = await Client.connect();
      const hash = await bcrypt.hash(u.password +process.env.BYCRYPT_PWD, Number(process.env.SALT || 10) );
    // Store hash in the database
    

    const result = await conn
        .query(sql, [u.first_name,u.last_name,hash])

    const user = result.rows[0]
      
    conn.release()
    delete user['password']
    return user
      } catch (err) {
          throw new Error(`Could not add new user ${u.first_name}. Error: ${err}`)
      }
  }
  async index(): Promise<SecureUser[]> {
    try {
      const sql = 'SELECT id,first_name,last_name FROM users '
      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn
        .query(sql)

      const users = result.rows;

      conn.release()
      
      return users
    } catch (err) {
      throw new Error(`Could not execute. Error: ${err}`)
    }
  }
 
  async show(id:string): Promise<SecureUser | null > {
    try {
      const sql = 'SELECT id,first_name,last_name FROM users WHERE id=($1)'

      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn
        .query(sql,[id])

      const user = result.rows[0];

      conn.release()
      return user
    } catch (err) {
      throw new Error(`Could not execute. Error: ${err}`)
    }
  }


}