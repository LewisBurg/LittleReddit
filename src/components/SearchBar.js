import React, {useState} from "react";

function SearchBar() {
    const [search, setSearch] = useState("");
    
    return (
        <div>
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a post..."
        />
        <button>Search</button>
        </div>
    );
    }

export default SearchBar;