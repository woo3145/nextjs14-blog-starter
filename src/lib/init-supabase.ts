import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
);

export interface Comment {
  id: number;
  created_at: Date;
  content: string;
  post_slug: string;
  username: string;
  password: string;
  user_ip: string;
}
