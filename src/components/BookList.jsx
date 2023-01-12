import React from 'react';
import ShowBook from './ShowBook';

const BookList = ({ books }) => {

  const renderedBooks = books.map((book) => {
    return <ShowBook key={book.id} book={book} />;
  });

  return (
    <div className='book-list'>{renderedBooks}</div>
  )

};

export default BookList


/* COMPONENT HEIRARCHY
------------------ APP ----------------------
                /       \
         AddBook         BookList
                        /        \
                ShowBook          EditBook
*/