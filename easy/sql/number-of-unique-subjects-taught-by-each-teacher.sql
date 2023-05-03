SELECT
    teacher.teacher_id,
    COUNT(DISTINCT teacher.subject_id) AS cnt
FROM teacher
GROUP BY teacher.teacher_id;
