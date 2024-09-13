import React from "react";

function SubRedditList() {
  const mockSubReddits = [
    { id: 1, name: "r/subreddit1" },
    { id: 2, name: "r/subreddit2" },
    { id: 3, name: "r/subreddit3" },
    { id: 4, name: "r/subreddit4" },
    { id: 5, name: "r/subreddit5" },
    { id: 6, name: "r/subreddit6" },
  ];

  return (
    
    <ul>
        {mockSubReddits.map((subreddit) => (
            <li key={subreddit.id}>
                <h3>{subreddit.name}</h3>
            </li>
        ))}
    </ul>
  );

}

export default SubRedditList;
