import { pool } from "../../db/db.js";


export const getAllRegister = async () =>  {
    const result = await pool.query(`SELECT * FROM registrations;`)
    return result.rows
};



export const getRegisterById = async (registration_id) => {
    const query = `SELECT * FROM registrations
                    WHERE registration_id = $1`
    const values = [registration_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};



export const postRegister = async (employee_id, coursep_id, course_id) => {
    const query =  `INSERT INTO registrantions (employee_id, coursep_id, course_id)
                    VALUES ($1, $2, $3)
                    RETURNING *;`;
    const values = [employee_id, coursep_id, course_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};



export const deleteRegister = async (registration_id) => {
    const query = `DELETE FROM registrantions 
                    WHERE registrantion_id = $1
                    RETURNING *;`;
    const values = [registration_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};

