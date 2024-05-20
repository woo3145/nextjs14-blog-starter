import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { CommentDeleteDialog } from './comment-delete-dialog';
import { Comment } from '@/types/comment';

export const CommentListItem = ({ comment }: { comment: Comment }) => {
  return (
    <li className="w-full block cursor-pointer bg-background hover:bg-accent focus:outline-none focus:bg-accent transition duration-150 ease-in-out">
      <div className="flex items-center px-4 py-3 sm:px-6">
        <div className="min-w-0 flex-1 flex items-center gap-4">
          <div className="w-8 h-8 bg-foreground/20 rounded-full shrink-0" />
          <div className="space-y-2">
            <div className="space-x-2">
              <span className="text-sm font-semibold">{comment.username}</span>
              <span className="text-xs text-foreground/70">
                {comment.created_at.toString().split('T')[0]}
              </span>
              <span className="text-xs text-foreground/70">
                {comment.user_ip}
              </span>
            </div>
            <div className="text-base antialiased leading-5 font-medium break-all text-wrap">
              {comment.content}
            </div>
          </div>
        </div>

        <CommentDeleteDialog comment={comment}>
          <Button
            variant={'ghost'}
            className="w-8 h-8 p-0 hover:text-destructive"
          >
            <X />
          </Button>
        </CommentDeleteDialog>
      </div>
    </li>
  );
};
