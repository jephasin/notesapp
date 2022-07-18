import React from "react";
import {MdSearch} from "react-icons/md";

const SearchItem = ({ handleSearchNote }) => {

    return (
        <div className="search-item">
            <MdSearch className="search-icons" size="1.2em" />
            <input type="text" placeholder="Type here to search..." onChange={(event) => handleSearchNote(event.target.value)} />
        </div>
    );
};

export default SearchItem;