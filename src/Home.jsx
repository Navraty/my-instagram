import React from 'react';
import Navbar from './Components/Common/Navbar';
import PostList from './Components/Post/PostList';

const Home = () => {
  return (
    <div>
      <div className='bg-red-200'>
        <Navbar  />
        <main className="mx-auto sm:w-full md:w-[60%] lg:w-[45%] p-5">
            <PostList />            
        </main>
      </div>
    </div>
  );
};

export default Home;
