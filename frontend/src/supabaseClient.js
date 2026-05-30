import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hcbethhmvalpppafzgdv.supabase.co"; // your project URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjYmV0aGhtdmFscHBwYWZ6Z2R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNzU5MjIsImV4cCI6MjA5NTY1MTkyMn0.YEUYcj9YKm3U-S9R2Yq-TUtZwKm8FLFC8-yR0pKUoxI"; // from Supabase → Project Settings → API → anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
