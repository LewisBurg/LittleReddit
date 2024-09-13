import React from 'react';

function PostDetail({ subredditName }) {
  return (
    <div>
      <h2>Posts from {subredditName}</h2>
      <ul>
        {/* Placeholder posts */}
        {[1, 2, 3].map((_, index) => (
          <li key={index}>
            <h3>Placeholder Post Title {index + 1}</h3>
            <p>by Placeholder Author - 0 upvotes</p>
            {/* Add more placeholder post details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostDetail;