import { Box } from '@mui/material';
import React from 'react';
import BookFilter from './BookFilter';



const BookContainer = () => {
    
  return (
    <Box sx={{display: 'flex', justifyContent: 'center',flexDirection: 'row'}}>
        <BookFilter />
        <Box sx={{width: '80%'}}>
            Here we will display Books.
        </Box>
    </Box>
  )
}

export default BookContainer;