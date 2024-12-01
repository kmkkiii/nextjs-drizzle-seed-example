import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';

dotenv.config();

export const db = drizzle(process.env.DATABASE_URL!);
