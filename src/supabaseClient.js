import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cgcrmpnfhmtqqcbimngf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnY3JtcG5maG10cXFjYmltbmdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NDI4NzEsImV4cCI6MjA2NzAxODg3MX0.2veAesJFxN8iNrXrT7y2b-tHl2X6rKTO7Ao4XYTdxgA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);