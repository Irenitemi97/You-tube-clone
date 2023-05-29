import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { Search, Mic } from '@mui/icons-material';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submit
    console.log('Search:', searchText);
  };

  const handleMicClick = () => {
    // Handle voice search
    console.log('Voice search');
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
      <IconButton type="submit" sx={{ 
        p: '10px', 
        color: 'red'
         }}>
        <Search />
      </IconButton>
      <IconButton color="inherit" onClick={handleMicClick}>
        <Mic />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
