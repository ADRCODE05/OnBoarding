import { pool } from '../../db/db.js'


// GET
export const getUsersEmailLogin = async (email) => {
    const query =( `
        SELECT u.user_id, u.email, u.password, u.role_id, r.name_role
        FROM users u
        INNER JOIN roles r ON u.role_id = r.role_id
        WHERE u.email = $1
    `);
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows[0];
};



export const getMe = async (userId) => {
    const query = (`
        SELECT u.user_id, u.email, u.role_id, r.name_role AS role, u.username
        FROM users u
        INNER JOIN roles r ON u.role_id = r.role_id
        WHERE u.user_id = $1
    `);
    const values = [userId]
    const result = await pool.query(query, values)
    return result.rows[0]
}


export const getProfile = async (idUser) => {
    const query = (`SELECT user_id, username, email, role_id FROM users
                WHERE user_id = $1`)
    const values = [idUser]
    const result = await pool.query(query, values)
    return result.rows[0]
};


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
export const putUserid = async (username, email, password, user_id) => {
    const query = (`UPDATE users 
                        SET username = $1, email = $2, password = $3, updated_at = CURRENT_TIMESTAMP
                        WHERE user_id = $4
                        RETURNING *`);
    const values = [username, email, password, user_id]
    const result = await pool.query(query, values)
    return result.rows[0];
};




export const putUserEmail = async (username, newEmail, password, email) => {
    const query = (`UPDATE users
                        SET username = $1, email = $2, password = $3, updated_at = CURRENT_TIMESTAMP
                        WHERE email = $4
                        RETURNING *`);
    const values = [username, newEmail, password, email]
    const result = await pool.query(query, values)
    return result.rows[0]
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

