import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";
import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  return new Response(JSON.stringify({ message: "Backend working!" }), {
    headers: { "Content-Type": "application/json" },
  });
});

const { Pool } = pkg;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get("/products", async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
