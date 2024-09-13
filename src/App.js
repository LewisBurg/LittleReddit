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
      <PostDetail/>  
      </div>
      </section>  
        
    </div>

    
  );
}

export default App;
