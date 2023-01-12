import React from 'react';

const ShowBook = ({ book }) => {


  return (
    <div className='book-show'>{book.title}</div>
  )
}

export default ShowBook


/* COMPONENT HEIRARCHY
------------------ APP ----------------------
                /       \
         AddBook         BookList
                        /        \
                ShowBook          EditBook
*/