import express, { Application } from 'express';
import dotenv from 'dotenv';
import categories_routes from './handlers/categories_handler';
dotenv.config();
export const app: Application = express();
const port = 3000;
categories_routes(app);
app.get('/', async (req, res) => {
  res.json('FrontStore Homepage');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
