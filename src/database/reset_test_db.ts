import Client from '../database';
export const resetTestDb = async () => {
  try {
    const sqls = [
      'DROP SCHEMA public CASCADE',
      'CREATE SCHEMA public',
      'GRANT ALL ON SCHEMA public TO postgres',
      'GRANT ALL ON SCHEMA public TO public',
    ];
    // @ts-ignore
    const conn = await Client.connect();
    for (let index = 0; index < sqls.length; index++) {
      const element = sqls[index];
      await conn.query(element);
    }
    return true;
  } catch (err) {
    throw new Error(`Could not reset test database. Error: ${err}`);
  }
};
