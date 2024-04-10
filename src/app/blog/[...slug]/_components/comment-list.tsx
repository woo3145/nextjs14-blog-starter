import * as React from 'react';
import { supabase } from '@/lib/init-supabase';
import { CommentListItem } from './comment-list-item';
import CommentWriter from './comment-writer';

export async function CommentList({
  slug,
  userIp,
}: {
  slug: string;
  userIp: string;
}) {
  const { data: comments, error } = await supabase
    .from('comment')
    .select('*')
    .eq('post_slug', slug);

  return (
    <div className="relative w-full mx-auto h-auto py-10">
      <h3 className="">댓글</h3>
      <CommentWriter slug={slug} userIp={userIp} />
      {error ? (
        <div className="py-10 flex justify-center items-center">
          😵 댓글 로드 중 에러가 발생했습니다.
        </div>
      ) : null}

      {comments && comments?.length === 0 ? (
        <div className="py-10 flex justify-center items-center">
          😢 댓글이 없습니다.
        </div>
      ) : (
        <div className="shadow overflow-hidden rounded-md">
          <ul>
            {comments?.map((comment) => (
              <CommentListItem key={comment.id} comment={comment} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
