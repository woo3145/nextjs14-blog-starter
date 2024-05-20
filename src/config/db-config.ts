interface DbConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
}

export const dbConfig: DbConfig = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
};
