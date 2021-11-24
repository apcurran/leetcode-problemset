SELECT Person.email AS Email
FROM Person
GROUP BY Person.email
HAVING COUNT(Person.email) > 1;