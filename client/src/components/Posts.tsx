import { useEffect, useState } from 'react';
import Post from './Post';

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

// Simple parser for your rich text JSON string (assumes paragraph content only)
function renderContent(contentJson: string) {
  try {
    const parsed = JSON.parse(contentJson);
    return parsed.map((block: any, index: number) => {
      if (block.type === 'paragraph') {
        return (
          <p key={index}>
            {block.children.map((child: any) => child.text).join('')}
          </p>
        );
      }
      return null;
    });
  } catch (err) {
    return <p>[Invalid content]</p>;
  }
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
        <Post key={post.id}>
          <div className='p-4'>
            <div className='grid justify-center'>
              <h2 className='text-3xl text-center underline'>{post.title}</h2>
              <div className='flex flex-col items-center'>
                {post.images
                  .split(',')
                  .map((url: string, index: number) => (
                    <img
                      key={index}
                      src={url.trim()}
                      alt={`Post image ${index + 1}`}
                      className='max-h-100 border-1 mt-2 max-w-full'
                    />
                  ))}
              </div>
            </div>
            <div className='p-6'>
              {renderContent(post.content)}
              <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#969696' }}>
                <div>Author: {post.author}</div>
                <div>Date: {new Date(post.date).toLocaleString()}</div>
              </div>
            </div>
          </div>
        </Post>
      ))}
    </div>
  );
}
