import React from "react";
import "./Search.css";

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className="searchbtn">
      <input 
      className="search_btn" 
      type="search" 
      placeholder="search robots" 
      onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
