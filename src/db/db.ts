import { drizzle } from 'drizzle-orm/postgres-js';

export const db = drizzle(process.env.DATABASE_URL!);

import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL, // Replace with your actual database URL if not using env variables
});

(async () => {
  try {
    await client.connect();
    console.log("Connection to the database was successful!");
    await client.end();
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
})();
