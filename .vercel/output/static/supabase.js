
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://bochzajearukwebjcfxj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvY2h6YWplYXJ1a3dlYmpjZnhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3NDQ0NDIsImV4cCI6MjAyMjMyMDQ0Mn0.kWv4ReZ1ACBRCtSQ36JG5jggebv8LpC_1a4O46iKpcM')