import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { Search, Mic } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
       navigate(`/search/${searchTerm}`);

       setSearchTerm('');
    }
    
    
  };

  const handleMicClick = () => {
    // Check if browser supports speech recognition
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';

      // Start speech recognition
      recognition.start();

      // When speech recognition results are available
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchTerm(transcript);
      };

      // On speech recognition error
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };

      // On speech recognition end
      recognition.onend = () => {
        // Submit the search
        if (searchTerm) {
          navigate(`/search/${searchTerm}`);
          setSearchTerm('');
        }
      };
    } else {
      console.log('Speech recognition not supported in this browser');
    }
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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
