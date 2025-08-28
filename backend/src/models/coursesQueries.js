import { pool } from "../../db/db.js";

// GET 
export const getCourse = async () => {
    const result = await pool.query(`SELECT * FROM courses;`)
    return result.rows
};


export const getCourseById = async (course_id) => {
    const query = (`SELECT * FROM courses WHERE course_id = $1;`)
    const values = [course_id]
    const result = await pool.query(query, values);
    return result.rows[0]
};

export const getCourseByTitle = async (title) => {
    const query = (`SELECT * FROM courses WHERE title = $1;`)
    const values = [title]
    const result = await pool.query(query, values)
    return result.rows[0]
}

// POST
export const postCourse = async (title, description, duration, state_id, type_id) => {
    const query = (`INSERT INTO courses (title, description, duration, state_id, type_id)
                    VALUES ($1, $2, $3, $4, $5)
                    RETURNING *`)
    const values = [title, description, duration, state_id, type_id]
    const result = await pool.query(query, values);
    return result.rows[0]
};


// PUT 
export const putCourse = async (title, description, duration, state_id, type_id, course_id) => {
    const query = (`UPDATE courses
                SET title = $1, description = $2, duration = $3, state_id = $4, type_id = $5, updated_at = CURRENT_TIMESTAMP
                WHERE course_id = $6
                RETURNING *`)
    const values = [title, description, duration, state_id, type_id, course_id]
    const result = await pool.query(query, values);
    return result.rows[0]
};


// DELETE 
export const deleteCourse = async (course_id) => {
    const query = (`DELETE FROM courses
                WHERE course_id = $1
                RETURNING *`)
    const values = [course_id];
    const result = await pool.query(query, values);
    return result.rows[0]
};


export const deleteCourseByTitle = async (title) => {
    const query = (`DELETE FROM courses
                    WHERE title = $1
                    RETURNING *;`)
    const values = [title];
    const result = await pool.query(query, values);
    return result.rows[0];
};