import React from 'react';

export default function Post({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-1 m-4">
      {children}
    </div>
  );
}
