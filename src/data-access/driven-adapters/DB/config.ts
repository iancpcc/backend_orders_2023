import dotenv from 'dotenv';
import path from 'path';

dotenv.config(
    { path: path.resolve(__dirname, '../../../.env') }
);
export const options = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3308 || process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    dialect:"mysql",
    queueLimit: 0
    // connectionLimit: 10 || process.env.DB_CONNECTION_LIMIT,
}