import { pool } from '../../db/db.js'


// GET
export const getUsers = async () => {
    const result = await pool.query(`SELECT * FROM users`)
    return result.rows
};


export const getUsersId = async (user_id) => {
    const query = (`SELECT * FROM users 
                        WHERE user_id = $1`);
    const values = [user_id]
    const result = await pool.query(query, values)
    return result.rows[0]
};


export const getUsersEmail = async (email) => {
    const query = (`SELECT * FROM users 
                        WHERE email = $1`);
    const values = [email]
    const result = await pool.query(query, values)
    return result.rows[0]
};



// POST
export const postUser = async (username, email, password, role_id) => {
    const query = (`INSERT INTO users (username, email, password, role_id)
                        VALUES ($1, $2, $3, $4)
                        RETURNING *`);
    const values = [username, email, password, role_id]
    const result = await pool.query(query, values);
    return result.rows[0]
};



// PUT
export const putUserid = async (user_id, username, email, password) => {
    const query = (`UPDATE users 
                        SET username = $1, email = $2, password = $3, updated_at = CURRENT_TIMESTAMP
                        WHERE user_id = $4
                        RETURNING *`);
    const values = [username, email, password, user_id]
    const result = await pool.query(query, values)
    return result.rows[0];
};



// DELETE
export const deleteUserId = async (user_id) => {
    const query = (`DELETE FROM users 
                        WHERE user_id = $1
                        RETURNING *`);
    const values = [user_id]
    const result = await pool.query(query, values);
    return result.rows[0];
};


export const deleteUserEmail = async (email) => {
    const query = (`DELETE FROM users
                        WHERE email = $1
                        RETURNING *`);
    const values = [email]
    const result = await pool.query(query, values)
    return result.rows[0];
};



export const confirmUser = async (email, password) => {
    const query = (`SELECT * FROM users WHERE email = $1 AND password = $2`)
    const values = [email, password]
    const result = await pool.query(query, values)
    return result.rows[0]

}





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



