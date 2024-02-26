'use client';
import * as React from 'react';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { type Comment, supabase } from '@/lib/init-supabase';

export const CommentList = ({
  slug,
  userIp,
}: {
  slug: string;
  userIp: string;
}) => {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [body, setBody] = React.useState({
    username: '',
    password: '',
    content: '',
  });
  const [errorText, setErrorText] = React.useState('');

  React.useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('comment')
        .select('*')
        .eq('post_slug', slug);

      if (error) setErrorText(error.message);
      else setComments(data);
    };

    fetchComments();
  }, [slug]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBody((prev) => ({ ...prev, [name]: value }));
    setErrorText('');
  };

  const addComment = async (e: any) => {
    e.preventDefault();
    const { username, password, content } = body;
    if (content && username && password) {
      const { data: comment, error } = await supabase
        .from('comment')
        .insert([{ ...body, post_slug: slug, user_ip: userIp }])
        .select()
        .single();
      if (error) setErrorText(error.message);
      else {
        setComments((prev) => [...prev, comment]);
        setBody({ username: '', password: '', content: '' }); // 폼 초기화
      }
    }
  };

  const deleteComment = async (id: number) => {
    const { error } = await supabase.from('comment').delete().match({ id });
    if (error) setErrorText(error.message);
    else setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-full py-10">
      <h3 className="">댓글</h3>
      <form onSubmit={addComment} className="space-y-2 py-6">
        <div className="flex gap-2">
          <Input
            className="rounded w-full p-2"
            type="text"
            placeholder="username"
            name="username"
            value={body.username}
            onChange={handleInputChange}
          />
          <Input
            className="rounded w-full p-2"
            type="text"
            placeholder="password"
            name="password"
            value={body.password}
            onChange={handleInputChange}
          />
        </div>
        <Input
          className="rounded w-full p-2"
          type="text"
          placeholder="content"
          name="content"
          value={body.content}
          onChange={handleInputChange}
        />
        <Button type="submit" className="w-full">
          작성
        </Button>
      </form>
      {errorText && <Alert text={errorText} />}
      <div className="shadow overflow-hidden rounded-md">
        <ul>
          {comments.map((comment) => (
            <CommentComponent
              key={comment.id}
              comment={comment}
              onDelete={() => deleteComment(comment.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const CommentComponent = ({
  comment,
  onDelete,
}: {
  comment: Comment;
  onDelete: () => void;
}) => {
  return (
    <li className="w-full block cursor-pointer bg-background hover:bg-accent focus:outline-none focus:bg-accent transition duration-150 ease-in-out">
      <div className="flex items-center px-4 py-3 sm:px-6">
        <div className="min-w-0 flex-1 flex items-center gap-4">
          <div className="w-8 h-8 bg-foreground/20 rounded-full" />
          <div>
            <div className="space-x-2">
              <span className="text-sm">{comment.username}</span>
              <span className="text-xs text-foreground/70">
                {comment.created_at.toString().split('T')[0]}
              </span>
              <span className="text-xs text-foreground/70">
                {comment.user_ip}
              </span>
            </div>
            <div className="text-base antialiased leading-5 font-medium truncate">
              {comment.content}
            </div>
          </div>
        </div>

        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete();
          }}
          variant={'ghost'}
          className="w-8 h-8 p-0 hover:text-destructive"
        >
          <X />
        </Button>
      </div>
    </li>
  );
};

const Alert = ({ text }: { text: string }) => (
  <div className="rounded-md bg-red-100 p-4 my-3">
    <div className="text-sm leading-5 text-red-700">{text}</div>
  </div>
);
