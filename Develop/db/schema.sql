-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    --string??
    category_name STRING NOT NULL,
);

CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    --string??
    product_name STRING INT NOT NULL,
    --how to validate that value is a decimal
    price DECIMAL NOT NULL,
    stock INT NOT NULL DEFAULT(10), 
    --not sure about this part
    category_id INT 
    REFERENCES category(id)
);

