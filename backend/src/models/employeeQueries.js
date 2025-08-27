import { pool } from "../../db/db.js";


// GET
export const getEmployee = async () => {
    const result = await pool.query(`SELECT * FROM employees;`)
    return result.rows
};


export const getEmployeeById = async (employee_id) => {
    const query = `SELECT * FROM employees WHERE employee_id = $1;`;
    const values = [employee_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};


// POST
export const postEmployess = async (full_name, identification_number, phone, charge_id, company_id, user_id) => {
    const query = `INSERT INTO employees (full_name, identification_number, phone, charge_id, company_id, user_id
                VALUES ($1, $2, $3, $4, $5, $6);`;
    const values = [full_name, identification_number, phone, charge_id, company_id, user_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};


// PUT
export const putEmployeesById = async (full_name, identification_number, phone, charge_id, company_id) => {
    const query = `UPDATE employees 
                SET full_name = $1, identification_number = $2, phone = $3, charge_id = $4, company_id = $5, updated_at = CURRENT_TIMESTAMP;`;
    const values = [full_name, identification_number, phone, charge_id, company_id, user_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};



// DELETE 
export const deleteEmployeesById = async (employee_id) => {
    const query = `SELECT FROM employees WHERE employee_id = $1;`
    const values = [employee_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};





