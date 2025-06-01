import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'travel_user',
  password: 'Travel@123',
  database: 'travelapp_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
