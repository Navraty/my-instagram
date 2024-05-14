import React from 'react';
import Navbar from './Components/Common/Navbar';
import PostList from './Components/Post/PostList';
imp

const Home = () => {
  return (
    <div>
      <div  className='min-h-screen bg-gradient-to-r from-green-400 via-yellow-500 to-blue-500 animate-gradient-x'>
        <Navbar  />
        <main className=" mx-auto w-[45%]  p-5">
            <PostList />  
            <CommentList />          
        </main>
      </div>
    </div>
  );
};

export default Home;
