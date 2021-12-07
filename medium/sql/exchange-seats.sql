SELECT
    (
        CASE
            WHEN id % 2 != 0 AND id != largest_id THEN id + 1
            WHEN id % 2 != 0 AND id = largest_id THEN id
            ELSE id - 1
        END
    ) AS id,
    student
FROM 
    seat,
    (SELECT MAX(id) AS largest_id FROM seat) AS info
ORDER BY id ASC;