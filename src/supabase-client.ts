import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://namywyzqxmbqqjvlzhgd.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hbXl3eXpxeG1icXFqdmx6aGdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwODgxODQsImV4cCI6MjA2NTY2NDE4NH0.mpb78WyRWljTgPQK-eSKCM7aGQie1-NiQwyxaaCKRwg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
