/* Replace with your SQL commands */
CREATE TABLE products(
    id SERIAL PRIMARY KEY ,
    name VARCHAR(150) NOT NULL,
    price FLOAT NOT NULL,
    category_id int REFERENCES categories(id)
);
