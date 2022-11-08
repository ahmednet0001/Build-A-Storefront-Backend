import express, { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();
export const app: Application = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.json('SOP');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
