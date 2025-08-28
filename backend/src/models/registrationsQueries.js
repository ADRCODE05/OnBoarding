import { pool } from "../../db/db";


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



export const postRegister = async (employee_id, star_date, end_date, coursep_id, course_id) => {
    const query =  `INSERT INTO registrantions (employee_id, star_date, end_date, coursep_id, course_id)
                    VALUES ($1, $2, $3, $4, $5)
                    RETURNING *;`;
    const values = [employee_id, star_date, end_date, coursep_id, course_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};



export const putRegisterById = async (employee_id, star_date, end_date, coursep_id, course_id, registration_id) => {
    const query = `UPDATE registrantions 
                    SET employee_id = $1, star_date = $2, end_date = $3, coursep_id = $4, course_id = $5, update_at = CURRENT_TIMESTAMP
                    WHERE registrantion_id = $6
                    RETURNING *;`;
    const values = [employee_id, star_date, end_date, coursep_id, course_id, registration_id]
    const result = await pool.query(query, values);
    return result.rows[0]
};



export const putRegister = async (star_date, end_date, registration_id) => {
    const query = `UPDATE registrantions
                    SET star_date = $1, end_date = $2, updated_at = CURRENT_TIMESTAMP
                    WHERE registrantion_id = $3
                    RETURNING *;`;
    const values = [star_date, end_date, registration_id]
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

