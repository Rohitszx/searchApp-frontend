import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Box } from '@mui/material';

const Filters = ({ filterType, setFilterType }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2 }}>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="question-type"
          name="type"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <FormControlLabel value="" control={<Radio />} label="All" />
          <FormControlLabel value="MCQ" control={<Radio />} label="MCQ" />
          <FormControlLabel value="ANAGRAM" control={<Radio />} label="Anagram" />
          <FormControlLabel value="READ_ALONG" control={<Radio />} label="Read Along" />
          <FormControlLabel value="CONTENT_ONLY" control={<Radio />} label="Content Only" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Filters;
