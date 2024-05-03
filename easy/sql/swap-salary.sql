-- -- solution 1 IF() func from MySQL
-- UPDATE Salary
-- SET sex = IF(sex = 'm', 'f', 'm');

-- solution 2 CASE
UPDATE Salary
SET sex =
    CASE
        WHEN sex = 'f' THEN 'm'
        ELSE 'f'
    END;
