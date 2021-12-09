SELECT w2.id
FROM Weather AS w1
INNER JOIN
    -- TO_DAYS(DATE col) Given a date date, returns the number of days since the start of the current calendar
    Weather AS w2 ON TO_DAYS(w1.recordDate) = TO_DAYS(w2.recordDate) - 1 AND
    w1.temperature < w2.temperature;