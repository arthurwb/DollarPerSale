import React from 'react';
import { Outlet } from 'react-router-dom';
import Posts from '../components/Posts';

function Home() {
  return (
    <div>
      <Posts></Posts>
    </div>
  );
}

export default Home;