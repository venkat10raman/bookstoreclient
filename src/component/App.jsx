import React from 'react';
import axios from 'axios';
import baseUrl from '../config/index';
import LayoutBase from './layout/LayoutBase';
import BookContainer from './book/BookContainer';

const App = () => {

    axios(`${baseUrl}/api/v1/books`).then(books => {
            console.log(books);
    })

  return (
    <LayoutBase>
      <BookContainer />
    </LayoutBase>
    
  )
}

export default App