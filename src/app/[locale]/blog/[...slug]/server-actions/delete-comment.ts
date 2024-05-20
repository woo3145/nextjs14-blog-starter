'use server';

import { supabase } from '@/lib/supabase/client';
import { revalidatePath } from 'next/cache';

export const deleteCommentServerAction = async (
  id: number,
  password: string,
  slug: string
) => {
  try {
    // 해당 ID의 댓글을 조회합니다.
    const { data: comment, error: fetchError } = await supabase
      .from('comment')
      .select('password')
      .eq('id', id)
      .single();

    // 조회 중 에러 발생 또는 댓글이 없는 경우
    if (fetchError || !comment) {
      console.error('SupabaseError:', fetchError);
      return {
        success: false,
        message: fetchError?.message || '댓글을 찾을 수 없습니다.',
      };
    }

    // 비밀번호가 일치하지 않는 경우
    if (comment.password !== password) {
      return {
        success: false,
        message: '비밀번호가 일치하지 않습니다.',
      };
    }

    const { error: deleteError } = await supabase
      .from('comment')
      .delete()
      .match({ id });

    if (deleteError) {
      return {
        success: false,
        message: deleteError.message || '댓글 삭제 중 오류가 발생했습니다.',
      };
    } else {
      revalidatePath(`/blog/${slug}`);
      return {
        success: true,
        message: '댓글이 성공적으로 삭제되었습니다.',
      };
    }
  } catch (e) {
    // 예상치 못한 예외
    console.error('ServerActionError:', e);
    return {
      success: false,
      message: '댓글 삭제 중 알수없는 에러가 발생했습니다.',
    };
  }
};
