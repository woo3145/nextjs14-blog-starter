'use client';

import { addCommentServerAction } from '@/app/[locale]/blog/[...slug]/server-actions/add-comment';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import React from 'react';
import { toast } from 'sonner';

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

    if (content.length > 1000) {
      toast.error('댓글은 1000자 이하로 작성해주세요.', { duration: 1500 });
      return;
    }

    if (username && password && content) {
      const result = await addCommentServerAction({
        username,
        password,
        content,
        slug,
        userIp,
      });
      if (result.success) {
        toast.success(result.message, { duration: 1500 });
        ref.current?.reset();
      } else {
        toast.error(result.message, { duration: 1500 });
      }
    } else {
      toast.error('모든 필드를 입력해주세요.', { duration: 1500 });
    }
  };

  return (
    <form ref={ref} action={addComment} className="space-y-2 py-6">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="username"
          name="username"
          defaultValue={'익명'}
        />
        <Input type="password" placeholder="password" name="password" />
      </div>
      <Input
        type="text"
        placeholder="content"
        name="content"
        maxLength={1000}
      />
      <Button type="submit" className="w-full">
        작성
      </Button>
    </form>
  );
};

export default CommentWriter;
