import { useContext } from 'react';
import BooksContext from '../context/books';
import ShowBook from './ShowBook';

const BookList = () => {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <ShowBook key={book.id} book={book} />;
  });

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  );

};

export default BookList


/* COMPONENT HEIRARCHY
------------------ APP ----------------------
                /       \
         AddBook         BookList
                        /        \
                ShowBook          EditBook
*/