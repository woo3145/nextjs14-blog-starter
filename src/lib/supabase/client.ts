import { createClient } from '@supabase/supabase-js';
import { dbConfig } from '@/config/db-config';

export const supabase = createClient(
  dbConfig.supabaseUrl,
  dbConfig.supabaseAnonKey
);
