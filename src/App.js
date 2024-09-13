import logo from './logo.svg';
import './App.css';
import React from 'react';

import SubRedditList from './components/SubRedditList';
import PostDetail from './components/PostDetail';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <h1>LittleReddit</h1>
        <SearchBar />
      </div>

      <section className='body'>
      <div className='subredditlist'>
        <SubRedditList/>
      </div>
      
      <div className='postdetail'>
      <PostDetail post={{title: "Post 1", author: "User 1", subreddit: "r/subreddit1", content: "This is the content of post 1"}} />  
      </div>
      </section>  
        
    </div>

    
  );
}

export default App;
