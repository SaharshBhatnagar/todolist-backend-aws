import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Successfully connected to the MySQL database.');

        connection.release();
        
    } catch (error) {
        console.log('Error connecting to the database:', error.message);
    }
}

testConnection();

export default pool;