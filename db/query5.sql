-- Write SQL query to find the 3rd highest salary from a table without using the
-- TOP/limit keyword.
-- offset fetch is not in mysql

SELECT Salary.Salary
FROM Salary
ORDER BY Salary.Salary DESC
OFFSET 2 rows
FETCH NEXT 1 ROW ONLY;