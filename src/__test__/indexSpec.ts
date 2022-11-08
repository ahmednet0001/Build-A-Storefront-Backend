

import supertest from 'supertest';

import { app } from '../index';

const request = supertest(app);

describe('Test end point /', () => {
  it('Existing /', async () => {
    const res = await request.get('/');
    expect(res.status).toBe(200)
  });
});