import { useEffect, useState } from 'react';
import Post from './Post';

async function getPosts() {
  const res = await fetch(import.meta.env.VITE_SERVER_URL);
  console.log("URL:", import.meta.env.VITE_SERVER_URL)
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default function Posts() {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {[...posts].reverse().map((post) => (
        <Post key={post.id} post={post}>
        </Post>
      ))}
    </div>
  );
}
