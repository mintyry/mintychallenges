-- List all orders, and who has ordered - if any. (Use Right Join) SQL:
SELECT Orders.Prod_Id, Orders.Product, Employees.Name
FROM Employees
RIGHT JOIN Orders ON Employees.Employee_ID = Orders.Employee_ID;