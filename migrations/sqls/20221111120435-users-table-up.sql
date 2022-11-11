/* Replace with your SQL commands */
/*
id
firstName
lastName
password

*/
CREATE TABLE users (
    id SERIAL PRIMARY KEY ,
    first_name VARCHAR(150) NOT NULL,   
    last_name VARCHAR(150),   
    password VARCHAR(250) NOT NULL
);