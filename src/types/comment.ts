export interface Comment {
  id: number;
  created_at: Date;
  content: string;
  post_slug: string;
  username: string;
  password: string;
  user_ip: string;
}
