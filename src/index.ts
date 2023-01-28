import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { login } from './routes/login/index.js';
import { logout } from './routes/logout/index.js';
import { users } from './routes/users/index.js';

import { limiter } from './utils/limiter.js';

dotenv.config();

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json()).use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Token'],
    credentials: true,
  }),
);

app.use(limiter(1000, 60000));

app.use('/login', login).use('/users', users).use('/logout', logout);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
