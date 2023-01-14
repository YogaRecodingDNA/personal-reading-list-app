import { useEffect } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

const App = () => {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <AddBook />
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