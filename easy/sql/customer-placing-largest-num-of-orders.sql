-- SELECT customer_number
-- FROM Orders
-- GROUP BY customer_number
-- ORDER BY COUNT(*) DESC
-- LIMIT 1;

SELECT MAX(COUNT(*)) AS customer_number
FROM Orders
GROUP BY customer_number;