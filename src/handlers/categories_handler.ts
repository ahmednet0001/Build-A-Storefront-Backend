import express, { Request, Response } from 'express';
import { Category, CategoryStore } from '../models/category_model';
import { auth } from './auth';

const store = new CategoryStore();
const create = async (req: Request, res: Response) => {
  const c = await store.create(req.body);
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

const categories_routes = (app: express.Application) => {
  app.post('/categories',auth, create);
  app.get('/categories/:id', show);
};

export default categories_routes;
