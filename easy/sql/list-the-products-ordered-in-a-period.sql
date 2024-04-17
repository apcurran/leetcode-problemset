-- Write a solution to get the names of products that have at least 100 units ordered in February 2020 and their amount.
SELECT
    Products.product_name,
    SUM(Orders.unit) AS unit
FROM Products
INNER JOIN Orders ON Products.product_id = Orders.product_id
WHERE Orders.order_date BETWEEN '2020-02-01' AND '2020-02-29'
-- I need to group duplicate rows to get a total for each product
GROUP BY Products.product_name
HAVING SUM(Orders.unit) >= 100;
