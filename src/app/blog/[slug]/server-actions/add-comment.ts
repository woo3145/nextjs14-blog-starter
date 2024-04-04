'use server';

import { supabase } from '@/lib/init-supabase';
import { revalidatePath } from 'next/cache';

interface addCommentServerActionProps {
  username: string;
  password: string;
  content: string;
  slug: string;
  userIp: string;
}

export const addCommentServerAction = async ({
  username,
  password,
  content,
  slug,
  userIp,
}: addCommentServerActionProps) => {
  try {
    const { data: comment, error } = await supabase
      .from('comment')
      .insert([
        { username, password, content, post_slug: slug, user_ip: userIp },
      ])
      .select()
      .single();

    console.log(error);

    //댓글이 성공적으로 생성되면 true 반환
    if (comment) {
      revalidatePath(`/blog/${slug}`);
      return true;
    }
  } catch (e) {
    console.log(e);
  }

  return false;
};
