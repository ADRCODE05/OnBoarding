import { pool } from "../../db/db";


// GET
export const getEmpleoyee = async () => {
    const result = await pool.query(`SELECT * FROM employees`)
    return result.rows
};


export const getEmployeeById = async (id_employee) => {
    const query = `SELECT * FROM employees WHERE id_employee = $1`
    const values = [id_employee]
    const result = await pool.query(query, values)
    return result.rows[0]
};


// POST
export const postEmployess = async (id_charge, id_user, id_company) => {
    const query = `INSERT INTO employees (id_charge, id_user, id_company)
                VALUES ($1, $2, $3)`
    const values = [id_charge, id_user, id_company]
    const result = await pool.query(query, values)
    return result.rows[0]
};


// PUT
export const putEmployeesById = async (id_charge, id_user, id_company) => {
    const query = `UPDATE employees 
                SET id_charge = $1, id_user = $2, id_company = $3`
    const values = [id_charge, id_user, id_company]
    const result = await pool.query(query, values)
    return result.rows[0]
};



// DELETE 
export const deleteEmployeesById = async (id_employee) => {
    const query = `SELECT FROM employees WHERE id_employee = $1`
    const values = [id_employee]
    const result = await pool.query(query, values)
    return result.rows[0]
};





