import { pool } from "../../db/db";

// GET 
export const getCourse = async () => {
    const result = await pool.query(`SELECT * FROM courses;`)
    return result.rows
};


export const getCourseById = async (id_course) => {
    const query = `SELECT * FROM courses WHERE id_course = $1;`
    const values = [id_course]
    const result = await pool.query(query, values);
    return result.rows[0]
};

export const getCourseByTitle = async (title) => {
    const query = `SELECT * FROM courses WHERE title = $1;`
    const values = [title]
    const result = await pool.query(query, values)
}

// POST
export const postCourse = async (title, description, duration, state_id, type_id) => {
    const query = `INSER INTO course (title, description, duration, statte_id, type_id)
                    VALUES ($1, $2, $3, $4, $5)
                    RETURNING *`
    const values = [title, description, duration, state_id, type_id]
    const result = await pool.query(query, values);
    return result.rows[0]
};


// PUT 
export const putCourse = async (title, description, duration, state_id, type_id, id_course) => {
    const query = `UPDATE course 
                SET title = $1, description = $2, duration = $3, state_id = $4, type_id = $5
                WHERE id_course = $6
                RETURNING *`
    const values = [title, description, duration, state_id, type_id, id_course]
    const result = await pool.query(query, values);
    return result.rows[0]
};


// DELETE 
export const deleteCourse = async (id_course) => {
    const query = `DELETE FROM courses
                WHERE id_course = $1
                RETURNING *`
    const values = [id_course];
    const result = await pool.query(query, values);
    return result.rows[0]
};
