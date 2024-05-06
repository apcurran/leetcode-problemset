-- subqueries
SELECT
    activity_start.machine_id,
    ROUND(AVG(activity_end.timestamp - activity_start.timestamp), 3) AS processing_time
FROM
    (SELECT * FROM Activity WHERE activity_type = 'end') AS activity_end
LEFT JOIN (SELECT * FROM Activity WHERE activity_type = 'start') AS activity_start
ON activity_start.machine_id = activity_end.machine_id
GROUP BY activity_start.machine_id;