import { OrderStore } from '../../models/order_model';

const store = new OrderStore()

describe("Order Model", () => {
   
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });

    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });



    it('create method should add a order', async () => {
        const result = await store.create({
          order_status:"completed",
          user_id:1

        });
        expect(result).toEqual({
            id: 1,
            order_status:"completed",
            user_id:1
        });
    });
    
        it('index method should return a list of orders', async () => {
            const result = await store.index();
            expect(result).toEqual([{
                id: 1,
            order_status:"completed",
            user_id:1
               
            }]);
        });
    
        it('show method should return the correct order', async () => {
            const result = await store.show("1");
            expect(result).toEqual({
                id: 1,
                order_status:"completed",
                user_id:1
            });
        });
     

});