SELECT COUNT(*) AS rich_count
FROM (
    SELECT DISTINCT customer_id
    FROM Store
    WHERE amount > 500
) AS rich_count;
