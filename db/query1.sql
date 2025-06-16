-- Who has ordered a product, and what did they order? SQL:
-- means show only who ordered a product along with the product

SELECT Employees.Name, Orders.Product
FROM Employees
JOIN Orders ON Employees.Employee_ID = Orders.Employee_ID;