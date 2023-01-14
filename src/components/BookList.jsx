import ShowBook from './ShowBook';
import useBooksContext from '../hooks/use-books-context';

const BookList = () => {
  const { books } = useBooksContext();

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
         AddBook       * BookList *
                        /        \
                ShowBook          EditBook
*/