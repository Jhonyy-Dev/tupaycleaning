import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lwblhqipvbvysehfyhkk.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3YmxocWlwdmJ2eXNlaGZ5aGtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0OTc5ODAsImV4cCI6MjA5MTA3Mzk4MH0.9BqVVCTIL4qbNo5ReTlPPbeFmfR59Js9Z9jcWuJMmw4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
