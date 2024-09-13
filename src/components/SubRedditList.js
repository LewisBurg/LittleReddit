import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits } from '../actions/subredditActions'; // Make sure the path is correct

function SubRedditList({ subredditName }) {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts); 

  useEffect(() => {
    dispatch(fetchSubreddits(subredditName)); 
  }, [subredditName, dispatch]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts from {subredditName}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            {/* Add more post details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubRedditList;
