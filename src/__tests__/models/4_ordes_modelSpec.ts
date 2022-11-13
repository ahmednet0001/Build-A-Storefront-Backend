import { OrderStore } from '../../models/order_model';
import { DashboardQueries } from "../../services/dashboard";

const orderStore = new DashboardQueries();

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
            order_status: "completed",
            user_id: 1

        });
        expect(result).toEqual({
            id: 1,
            order_status: "completed",
            user_id: 1
        });
    });

    it('index method should return a list of orders', async () => {
        const result = await store.index();
        expect(result).toEqual([{
            id: 1,
            order_status: "completed",
            user_id: 1

        }]);
    });

    it('show method should return the correct order', async () => {
        const result = await store.show("1");
        expect(result).toEqual({
            id: 1,
            order_status: "completed",
            user_id: 1
        });
    });
    it('Add Product to order ', async () => {
        const order = {}
        const result = await store.addProduct(
            10,
            '1',
            '1'
        );
        expect(result).toEqual({
            id: 1,

            quantity: 10,
            order_id: '1',
            product_id: '1'
        })
    });
    it('Order Derails ', async () => {
        const order = {}
        const result = await orderStore.productsInOrder('1');
        expect(result).toEqual([ { name: 'product1', quantity: 10, price: 250 } ])
    })

});