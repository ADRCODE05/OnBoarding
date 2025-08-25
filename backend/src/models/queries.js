import { pool } from '../../db/db.js'

// Users
// GET
export const getUsers = async () => {
    const result = await pool.query(`SELECT * FROM users`)
    return result.rows
};


export const getUsersId = async (id_user) => {
    const query = (`SELECT * FROM users 
                        WHERE id_user = $1`);
    const values = [id_user]
    const result = await pool.query(query, values)
    return result.rows[0]
};


export const getUsersEmail = async (email) => {
    const query = (`SELECT * FROM users 
                        WHERE email = $1
                        RETURNIGN *`);
    const values = [email]
    const result = await pool.query(query, values)
    return result.rows[0]
};



// POST
export const postUser = async (name_user, email, password_user, id_role) => {
    const query = (`INSERT INTO users (name_user, email, password_user, id_role)
                        VALUES ($1, $2, $3, $4)`);
    const values = [name_user, email, password_user, id_role]
    const result = await pool.query(query, values);
    return result.rows[0]
};



// PUT
export const putUserid = async (id_user, name_user, email, password_user) => {
    const query = (`UPDATE users 
                        SET name_user = $1, email = $2, password_user = $3
                        WHERE id_user = $4
                        RETURNIGN *`);
    const values = [name_user, email, password_user, id_user]
    const result = await pool.query(query, values)
    return result.rows[0];
};



// DELETE
export const deleteUserId = async (id_user) => {
    const query = (`DELETE FROM users 
                        WHERE id_user = $1
                        RETURNIGN *`);
    const values = [id_user]
    const result = await pool.query(query, values);
    return result.rows[0];
};


export const deleteUserEmail = async (email) => {
    const query = format(`DELETE FROM users
                        WHERE email = $1
                        RETURNIGN *`);
    const values = [email]
    const result = await pool.query(query, values)
    return result.rows[0];
};







/*
 COURSES 
 GET 
export const getCourse = async () => {
    const result = await pool.query(`SELECT * FROM courses`);
    return result.rows
}


export const getCourseId = async (id_course) => {
    const query = format(`SELECT * FROM courses
                        WHERE id_course = %L`, id_course);
    const result = await pool.query(query);
    return result.rows[0]
};


 POST
export const postCourse = async (title_course, description, duration, id_statu, id_typeC) => {
    const query = format(`INSERT INTO courses (title_course, description, duration, id_statu, id_typeC)
                        VALUES (%L, %L, %L, %L, %L)`, title_course, description, duration, id_statu, id_typeC);
    const result = await pool.query(query);
    return result.rows[0]
};


 PUT
export const putCourse = async (id_course, title_course, description, duration, id_statu, id_typeC) => {
    const query = format(`UPDATE courses SET title_course = %L, description = %L, duration = %L, id_statu = %L, id_typeC = %L
                        WHERE id_course = %L
                        RETURNIGN *`, title_course, description, duration, id_statu, id_typeC, id_course);
    const result = await pool.query(query);
    return result.rows[0]
};


 DELETE 
export const deleteCourse = async (id_course) => {
    const query = format(`SELECT FROM courses WHERE id_course = %L`, id_course);
    const result = await pool.query(query);
    return result.rows[0]
};


*/



