import { pool } from "../../db/db.js";

export const getPersonalized = async () => {
    const result = await pool.query(`SELECT * FROM personalized_courses`)
    return result.rows
};


export const getPersonalizedById = async (coursep_id) => {
    const query = (`SELECT * FROM personalized_courses 
                WHERE coursep_id = $1;`)
    const values = [coursep_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};

export const getPersonalizedByTitle = async (title) => {
    const query = (`SELECT * FROM personalized_courses 
                WHERE title = $1;`)
    const values = [title]
    const result = await pool.query(query, values)
    return result.rows[0]
};


export const postPersonalized = async (coursep_id, title, description, duration, company_id, state_id, type_id) => {
    const query = (`INSERT INTO personalized_courses (title, description, duration, company_id, state_id, type_id)
                    VALUES ($1, $2, $3, $4, $5, $6)
                    RETURNING *;`)
    const values = [coursep_id, title, description, duration, company_id, state_id, type_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};


export const putPersonalizedById = async (title, description, duration, company_id, state_id, type_id, coursep_id) => {
    const query = (`UPDATE personalized_courses 
                    SET title = $1, description = $2, duration = $3, company_id = $4, state_id = $5, type_id = $6, updated_at = CURRENT_TIMESTAMP
                    WHERE coursep_id = $7
                    RETURNING *;`)
    const values = [title, description, duration, company_id, state_id, type_id, coursep_id]
    const result = await pool.query(query, values);
    return result.rows[0];
};


export const deletePersonalizedById = async (coursep_id) => {
    const query = (`DELETE FROM personalized_courses
                    WHERE coursep_id = $1
                    RETURNING *;`)
    const values = [coursep_id];
    const result = await pool.query(query, values)
    return result.rows[0];
};

export const deletePersonalizedByTitle = async (title) => {
    const query = (`DELETE FROM personalized_courses
                    WHERE title = $1
                    RETURNING *;`)
    const values = [title];
    const result = await pool.query(query, values);
    return result.rows[0];
};
