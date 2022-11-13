import Client from '../database'

export class DashboardQueries {
  // Get all products that have been included in orders
  async productsInOrder(order_id:string): Promise<{name: string, price: number,quantity:number}[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect()


      const sql=`SELECT name ,quantity, price FROM  products INNER JOIN order_products ON products.id =order_products.id`;

      const result = await conn.query(sql)

      conn.release()
      
      return result.rows
    } catch (err) {
      throw new Error(`unable get products and orders: ${err}`)
    } 
  }
}