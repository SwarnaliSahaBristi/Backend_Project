CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    salary NUMERIC(10,2),
    department VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO employees(name, email, salary, department)
VALUES
('Naim', 'naim@gmail.com', 30000, 'IT'),
('Rahim', 'rahim@gmail.com', 45000, 'HR'),
('Karim', 'karim@gmail.com', 55000, 'Finance'),
('Ayesha', 'ayesha@gmail.com', 70000, 'IT'),
('Mitu', 'mitu@gmail.com', 40000, 'HR');

SELECT * FROM employees;

SELECT name, salary
FROM employees;

SELECT *
FROM employees
WHERE salary > 40000;

SELECT *
FROM employees
ORDER BY salary DESC;

SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 3;

UPDATE employees
SET salary = 50000
WHERE id = 1;

SELECT * FROM employees;

DELETE FROM employees
WHERE id = 5;

SELECT *
FROM employees
WHERE salary BETWEEN 30000 AND 60000;

SELECT *
FROM employees
WHERE department IN ('IT', 'HR');

SELECT COUNT(*) AS total_employee
FROM employees;

SELECT AVG(salary) AS average_salary
FROM employees;

SELECT department, COUNT(*) AS total_employee
FROM employees
GROUP BY department;

SELECT department, COUNT(*) AS total_employee
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(50) UNIQUE,
    price NUMERIC(10,2) DEFAULT 0
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    amount NUMERIC(10,2),

    CONSTRAINT fk_user
    FOREIGN KEY(user_id)
    REFERENCES users(id)
);

INSERT INTO users(name)
VALUES
('Naim'),
('Rahim');

INSERT INTO orders(user_id, amount)
VALUES
(1, 500),
(1, 1200),
(2, 700);

SELECT users.name, orders.amount
FROM users
INNER JOIN orders
ON users.id = orders.user_id;