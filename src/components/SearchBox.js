import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import debounce from '../utils/debounce';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debounce(() => onSearch(value), 300);
  };

  return (
    <Box sx={{ width: '100%', marginBottom: 2 }}>
      <TextField
        fullWidth
        label="Search questions..."
        variant="outlined"
        value={query}
        onChange={handleInputChange}
        size="large"
      />
    </Box>
  );
};

export default SearchBox;
