import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require'})
export const db = drizzle(sql);

// Function to check database connection
async function checkDatabaseConnection() {
  try {
    // Run a simple query to confirm connection
    const result = await sql`SELECT NOW() AS current_time`;

    console.log("Database connection established successfully!");
    console.log("Current time from DB:", result[0].current_time);
    return true; // Connection is successful
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return false; // Connection failed
  }
}

// Example usage
checkDatabaseConnection();