'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Comment } from '@/lib/init-supabase';
import { deleteCommentServerAction } from '../server-actions/delete-comment';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface CommentDeleteDialogProps {
  children: React.ReactNode;
  comment: Comment;
}

export const CommentDeleteDialog = ({
  children,
  comment,
}: CommentDeleteDialogProps) => {
  const onDelete = async (formData: FormData) => {
    const password = formData.get('password') as string;
    const result = await deleteCommentServerAction(
      comment.id,
      password,
      comment.post_slug
    );

    if (result.success) {
      toast.success(result.message, { duration: 1500 });
    } else {
      toast.error(result.message, { duration: 1500 });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>댓글을 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            댓글 작성시 입력했던 패스워드를 입력해주세요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form action={onDelete} className="space-y-2">
          <Input type="password" placeholder="password" name="password" />
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction type="submit">확인</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
