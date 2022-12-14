import { resetTestDb } from '../../database/reset_test_db';
import { User, UserStore } from '../../models/user_model';

const store = new UserStore()

describe("user Model", () => {

    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });

    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });



    it('create method should add a user', async () => {
        const result = await store.create({
            first_name: "Ahmed",
            last_name: "Ali",
            password: "11221122"

        });
        expect(result).toEqual({
            id: 1,
            first_name: "Ahmed",
            last_name: "Ali",

        });
    });

    it('index method should return a list of users', async () => {
        const result = await store.index();
        expect(result).toEqual([{
            id: 1,
            first_name: "Ahmed",
            last_name: "Ali",

        }]);
    });

    it('show method should return the correct user', async () => {
        const result = await store.show("1");
        expect(result).toEqual({
            id: 1,
            first_name: "Ahmed",
            last_name: "Ali",
        });
    });

});