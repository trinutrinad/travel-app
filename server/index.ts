import express from 'express';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection pool setup
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Simple GET route example
app.get('/', (req, res) => {
  res.send('Hello from Travel App backend!');
});

// POST /users route with validation and error handling
app.post(
  '/users',
  // Validation rules
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Must be a valid email'),

  async (req, res, next) => {
    // Check validation result
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email } = req.body;
      const [result] = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);

      // @ts-ignore
      res.status(201).json({ message: 'User created', userId: result.insertId });
    } catch (err) {
      next(err); // Pass error to error handler middleware
    }
  }
);

// Centralized error handling middleware (must come after routes)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message || 'Something went wrong',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
