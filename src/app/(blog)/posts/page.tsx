import getPosts from '@/lib/get-posts';

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <div className="w-full max-w-screen-lg flex flex-col px-6 mx-auto">
      <ul>
        {posts.map((post) => {
          return <li key={post.title}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
