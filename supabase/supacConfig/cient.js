import { createClient } from "@supabase/supabase-js";

// const URL = "https://your-supabase-url.supabase.co";
// const APY_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpenFsc2V4anZxb2V4Z2xkb3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NDcyMTEsImV4cCI6MjA1OTAyMzIxMX0.Jo0CEDOfj6JtCdLdDVKnqaX4poAbx417uT9hj2rlAvY";

const URL = import.meta.env.VITE_SUPABASE_URL;
const API_KEY = import.meta.env.VITE_SUPABASE_KEY;


export const client = createClient(URL, API_KEY);

