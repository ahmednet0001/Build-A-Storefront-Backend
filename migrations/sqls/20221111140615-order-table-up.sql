/* Replace with your SQL commands */
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
   
    order_status VARCHAR(15),
    user_id int REFERENCES users(id)
);