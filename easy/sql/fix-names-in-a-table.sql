SELECT
    Users.user_id,
    CONCAT(UPPER(SUBSTRING(Users.name, 1, 1)), LOWER(SUBSTRING(Users.name, 2))) AS name
FROM Users
ORDER BY Users.user_id;
