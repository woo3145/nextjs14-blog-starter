import getPosts from '@/lib/get-posts';

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const posts = await getPosts();
  return (
    <div className="w-full flex flex-col px-6">
      <ul>
        {posts.map((post) => {
          return <li key={post.title}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
