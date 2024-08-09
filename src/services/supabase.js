
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://cykgrtsdcoiwqnmaruqf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5a2dydHNkY29pd3FubWFydXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0ODEyNDYsImV4cCI6MjAzODA1NzI0Nn0.cm7d5JzXXYfXe_qDg7zJ6nJdRau1THY1afWQ7DlHy7U"
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;