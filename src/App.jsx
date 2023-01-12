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
  ]

  setBooks(updatedBooks);
}

  return (
    <div className="app">
      <BookList books={books} />
      <AddBook onAdd={addBook} />
    </div>
  )
}

export default App;


/* COMPONENT HEIRARCHY
------------------ APP ----------------------
                /       \
         AddBook         BookList
                        /        \
                ShowBook          EditBook
*/