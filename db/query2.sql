-- List all employees, and their orders - if any. SQL:
SELECT Employees.Name, Orders.Product
FROM Employees
LEFT JOIN Orders ON Employees.Employee_ID = Orders.Employee_ID;