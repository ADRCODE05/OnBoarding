import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config();

export const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    max: 10
})

const connectionDB = async () => {
    let connection
    try {
        connection = await pool.connect();
        console.log('✅ Database connected successfully');
    } catch (error) {
        console.error(`❌ Error connecting to database: ${error.message}`);
    } finally {
        if(connection) connection.release();
    }
}



connectionDB()
