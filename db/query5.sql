-- Write SQL query to find the 3rd highest salary from a table without using the
-- TOP/limit keyword.
-- offset fetch is not in mysql

-- SELECT Salaries.Salary
-- FROM Salaries
-- ORDER BY Salaries.Salary DESC
-- SOLUTION USING LIMIT
-- LIMIT 1 OFFSET 2;

SELECT DISTINCT Salary
FROM Salaries AS outerTable
-- Only return salaries from outerTable where this condition is true: The number 2 is equal to the result of the subquery.
WHERE 2 = (
    -- distinct chooses one distinct value for each value; avoids duplicate values if any
    SELECT COUNT(DISTINCT Salary)
    FROM Salaries AS innerTable
    -- we need to find where 2  rows in innertable are greater than outer table
    -- so if salary is 15000 in outer, there is no rows in inner greater then it
    --  10000 in outer, only one row in inner is greater than it
    --  8000 in outer, two rows in inner are greater than it (ding ding, winner!)
    -- 4000 in outer, three rows in inner are greater; too much
    WHERE innerTable.Salary > outerTable.Salary
);
