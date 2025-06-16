-- fetch odd rows fro employees table

SELECT * from Employees
WHERE Employee_ID % 2 <> 0;
-- <> means "not equal", same as !=