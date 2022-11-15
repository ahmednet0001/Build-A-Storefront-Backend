import express, { Request, Response } from 'express';
import { UserStore } from '../models/user_model';
import { auth } from './auth';

const store = new UserStore();
const create = async (req: Request, res: Response) => {
  const c = await store.create(req.body);
  res.json("HJ")
  res.send({
    category: c,
  });
};
const show = async (req: Request, res: Response) => {
  const c = await store.show(req.params.id);
  res.send({
    category: c,
  });
};
const all = async (req: Request, res: Response) => {
  const categories = await store.index();
  res.send({
    categories: categories,
  });
};


const categories_routes = (app: express.Application) => {
  app.post('/users',auth, create);
  app.get('/users/:id',auth, show);
  app.get('/users',auth, all);
};

export default categories_routes;
