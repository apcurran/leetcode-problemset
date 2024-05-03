-- IF() func from MySQL
UPDATE Salary
SET sex = IF(sex = 'm', 'f', 'm');