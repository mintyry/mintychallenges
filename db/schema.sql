DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db;
USE test_db;

CREATE TABLE Employees (
    Employee_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(30)
);

CREATE TABLE Orders (
    Prod_Id INT PRIMARY KEY,
    Product VARCHAR(30),
    Employee_ID INT
);

CREATE TABLE Salaries (
    Employee_ID INT AUTO_INCREMENT PRIMARY KEY,
    Salary INT NOT NULL
);