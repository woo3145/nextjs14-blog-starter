'use server';

import { supabase } from '@/lib/init-supabase';
import { revalidatePath } from 'next/cache';

interface AddCommentServerActionProps {
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
}: AddCommentServerActionProps) => {
  try {
    const { data: comment, error } = await supabase
      .from('comment')
      .insert([
        { username, password, content, post_slug: slug, user_ip: userIp },
      ])
      .select()
      .single();

    if (error) {
      console.error('SupabaseError:', error.message);
      return {
        success: false,
        message: `댓글 작성 실패: ${error.message}`,
      };
    }

    if (comment) {
      revalidatePath(`/blog/${slug}`);
      return {
        success: true,
        message: '댓글을 성공적으로 작성했습니다.',
      };
    } else {
      return {
        success: false,
        message: '댓글 작성 실패: 알 수 없는 에러',
      };
    }
  } catch (e) {
    // 예상치 못한 예외
    console.error('ServerActionError:', e);
    return {
      success: false,
      message: '댓글 작성 중 알수없는 에러가 발생했습니다.',
    };
  }
};
