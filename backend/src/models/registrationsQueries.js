import { pool } from "../../db/db.js";


export const getEmployeeTable = async () => {
    const result = await pool.query(`SELECT 
                                e.employee_id,
                                e.full_name AS name,
                                COUNT(r.course_id) AS courses,
                                SUM(CASE WHEN cs.name_state = 'Completado' THEN 1 ELSE 0 END) AS completed,
                                COALESCE(SUM(c.duration), INTERVAL '0')   AS total_duration,  -- 👈 FIX
                                STRING_AGG(c.title, ', ' ORDER BY c.title) AS course_names,
                                STRING_AGG(DISTINCT cs.name_state, ', ')   AS status
                                FROM employees e
                                LEFT JOIN registrations r ON e.employee_id = r.employee_id
                                LEFT JOIN courses c        ON r.course_id   = c.course_id
                                LEFT JOIN courses_states cs
                                ON c.state_id = cs.state_id
                                GROUP BY e.employee_id, e.full_name
                                ORDER BY e.full_name;`);
    return result.rows
};



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
    const query =  `INSERT INTO registrations (employee_id, coursep_id, course_id)
                    VALUES ($1, $2, $3)
                    RETURNING *;`;
    const values = [employee_id, coursep_id, course_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};



export const deleteRegister = async (registration_id) => {
    const query = `DELETE FROM registrations 
                    WHERE registration_id = $1
                    RETURNING *;`;
    const values = [registration_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};

