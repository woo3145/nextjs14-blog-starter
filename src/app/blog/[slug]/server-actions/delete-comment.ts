'use server';

import { supabase } from '@/lib/init-supabase';
import { revalidatePath } from 'next/cache';

export const deleteCommentServerAction = async (
  id: number,
  password: string,
  slug: string
) => {
  try {
    // 해당 ID의 댓글을 조회
    const { data: comment, error: fetchError } = await supabase
      .from('comment')
      .select('password')
      .eq('id', id)
      .single();

    // 조회 중 에러가 발생하거나, 댓글이 없는 경우
    if (fetchError || !comment) {
      console.log(fetchError || '댓글을 찾을 수 없습니다.');
      return false;
    }

    // 비밀번호가 일치하지 않는 경우
    if (comment.password !== password) {
      console.log('비밀번호가 일치하지 않습니다.');
      return false;
    }

    const { error: deleteError } = await supabase
      .from('comment')
      .delete()
      .match({ id });
    if (!deleteError) {
      revalidatePath(`/blog/${slug}`);
      return true;
    } else {
      console.log(deleteError);
    }
  } catch (e) {
    console.log(e);
  }

  return false;
};
