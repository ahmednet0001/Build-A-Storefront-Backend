import express, { Request, Response } from 'express';
import {  ProductStore } from '../models/product_model';
import { auth } from './auth';

const store = new ProductStore();
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
const productsByCategory = async (req: Request, res: Response) => {
  const categories = await store.showByCategory(Number(req.params.id));
  res.send({
    categories: categories,
  });
};


const categories_routes = (app: express.Application) => {
  app.post('/products',auth, create);
  app.get('/products/:id', show);
  app.get('/products', all);
  app.get('/products/category/:id', productsByCategory);

};

export default categories_routes;
