import { resetTestDb } from '../../database/reset_test_db';
import { Category, CategoryStore } from '../../models/category_model';

const store = new CategoryStore()

describe("category Model", () => {
   
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });

    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });



    it('create method should add a category', async () => {
        const result = await store.create({
            name: 'sport',

        });
        expect(result).toEqual({
            id: 1,
            name: 'sport'
        });
    });
    
        it('index method should return a list of categories', async () => {
            const result = await store.index();
            expect(result).toEqual([{
                id: 1,
                name: 'sport'
               
            }]);
        });
    
        it('show method should return the correct category', async () => {
            const result = await store.show("1");
            expect(result).toEqual({
                id: 1,
                name:"sport"
            });
        });
     

});