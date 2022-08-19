SELECT
    user_id,
    MAX(time_stamp) AS last_stamp
FROM Logins
-- filter all not in 2020
WHERE YEAR(time_stamp) = 2020
GROUP BY user_id;