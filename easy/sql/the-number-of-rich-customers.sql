-- -- solution 1
-- SELECT COUNT(*) AS rich_count
-- FROM (
--     SELECT DISTINCT customer_id
--     FROM Store
--     WHERE amount > 500
-- ) AS rich_count;

-- solution 2
SELECT COUNT(DISTINCT customer_id) AS rich_count
FROM Store
WHERE amount > 500;
