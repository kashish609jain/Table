import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";

const Search = ({ searchQuery }) => {
  const eventUpdate = (e) => {
    searchQuery(e);
  };

  return (
    <div className="searchBar">
      <Input
        placeholder="Search by name, email or role..."
        onChange={eventUpdate}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </div>
  );
};

export default Search;
