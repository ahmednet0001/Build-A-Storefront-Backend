import { resetTestDb } from '../../database/reset_test_db';
import { Product, ProductStore } from '../../models/product_model';

const store = new ProductStore()

describe("product Model", () => {
   
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });

    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });



    it('create method should add a product', async () => {
        const result = await store.create({
            name: 'product1',
            price: 250,
            category_id: 1

        });
        expect(result).toEqual({
            id:1,
            name: 'product1',
            price: 250,
            category_id: 2

        });
    });

    it('index method should return a list of products', async () => {
        const result = await store.index();
        expect(result).toEqual([{
            id:1,
            name: 'product1',
            price: 250,
            category_id: 1


        }]);
    });

    it('show method should return the correct product', async () => {
        const result = await store.show("1");
        expect(result).toEqual({
            id:1,
            name: 'product1',
            price:250,
            category_id:1

        });
    });


});