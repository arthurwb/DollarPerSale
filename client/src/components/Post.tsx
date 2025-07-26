import React from 'react';

function renderContent(contentJson: any) {
  try {
    return <p>{contentJson[0].children[0].text}</p>
  } catch (err) {
    console.log(err);
    return <p>[Invalid content]</p>;
  }
}

export default function Post(post: any) {
  post = post.post
  return (
    <div className="border-1 m-4">
      <div className='p-4'>
        <div className='grid justify-center'>
          <h2 className='text-3xl text-center underline'>{post.title}</h2>
          <div className='flex flex-col items-center'>
            {post.images && post.images
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
    </div>
  );
}
