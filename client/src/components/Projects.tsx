import { useEffect, useState } from 'react';
import Project from './Project';

async function getProjects() {
  const res = await fetch(import.meta.env.VITE_SERVER_URL_PROJECT);
  console.log("URL:", import.meta.env.VITE_SERVER_URL_PROJECT)
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export default function Posts() {
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProjects()
      .then(data => {
        setProjects(data);
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
    <div className='grid grid-cols-3 gap-1 max-md:grid-cols-1'>
      {[...projects].reverse().map((project) => (
        <Project key={project.id} project={project} className='grid grid-col-3'>
        </Project>
      ))}
    </div>
  );
}
