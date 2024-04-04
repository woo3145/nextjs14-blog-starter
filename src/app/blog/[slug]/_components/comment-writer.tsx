'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import React from 'react';
import { addCommentServerAction } from '../server-actions/add-comment';

interface CommentWriterProps {
  slug: string;
  userIp: string;
}

const CommentWriter = ({ slug, userIp }: CommentWriterProps) => {
  const ref = React.createRef<HTMLFormElement>();
  const addComment = async (formData: FormData) => {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const content = formData.get('content') as string;

    if (username && password && content) {
      const result = await addCommentServerAction({
        username,
        password,
        content,
        slug,
        userIp,
      });
      if (result) {
        ref.current?.reset();
      } else {
        console.log('댓글 작성 실패');
      }
    }
  };

  return (
    <form ref={ref} action={addComment} className="space-y-2 py-6">
      <div className="flex gap-2">
        <Input type="text" placeholder="username" name="username" />
        <Input type="password" placeholder="password" name="password" />
      </div>
      <Input type="text" placeholder="content" name="content" />
      <Button type="submit" className="w-full">
        작성
      </Button>
    </form>
  );
};

export default CommentWriter;
