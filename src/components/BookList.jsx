import React from 'react';
import ShowBook from './ShowBook';

const BookList = ({ books, onEdit, onDelete }) => {

  const renderedBooks = books.map((book) => {
    return <ShowBook onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />;
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