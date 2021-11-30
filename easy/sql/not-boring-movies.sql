SELECT *
FROM Cinema
WHERE
    (id % 2) != 0 AND
    Cinema.description != 'boring'
ORDER BY Cinema.rating DESC;
