import { useState } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title
      }
    ];

    setBooks(updatedBooks);
  };
  
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if(book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      <AddBook onAdd={addBook} />
    </div>
  );
};

export default App;


/* COMPONENT HEIRARCHY
------------------ APP ----------------------
                /       \
         AddBook         BookList
                        /        \
                ShowBook          EditBook
*/