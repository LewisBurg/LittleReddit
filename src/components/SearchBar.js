import React, {useState} from "react";
import "./SearchBar.css";

function SearchBar() {
    const [search, setSearch] = useState("");
    
    return (
        <div>
        <input
            className="search-bar"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a post..."
        />
        <button className="search-button">Search</button>
        </div>
    );
    }

export default SearchBar;