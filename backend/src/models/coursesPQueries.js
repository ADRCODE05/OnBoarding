import { pool } from "../../db/db";

export const getPersonalizedC = async () => {
    const result = `SELECT * FROM personalized_courses`
    return result
};


export const getPersonalizedCById = async (coursep_id) => {
    const query = `SELECT * FROM personalized_courses 
                WHERE coursep_id = $1;`
    const values = [coursep_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};

export const getPersonalizedCByTitle = async (title) => {
    const query = `SELECT * FROM personalized_courses 
                WHERE title = $1;`
    const values = [title]
    const result = await pool.query(query, values)
    return result.rows[0]
};


export const postPersonalized = async (title, description, duration, company_id, state_id, type_id) => {
    const query = `INSERT INTO personalized_courses (title, description, duration, company_id, state_id, type_id)
                    VALUES ($1, $2, $3, $4, $5, $6)
                    RETURNING *;`
    const values = [title, description, duration, company_id, state_id, type_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};