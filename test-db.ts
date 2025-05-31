// test-db.ts
import { pool } from './db.js';

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT NOW() AS now');
    console.log('✅ DB Connected! Current time:', rows[0].now);
    connection.release();
  } catch (error) {
    console.error('❌ DB Connection failed:', error);
  }
}

testConnection();
