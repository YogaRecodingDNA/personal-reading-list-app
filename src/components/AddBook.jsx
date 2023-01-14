import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const { addBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(title);
    setTitle('');
  }

  return (
    <div className='book-create'>
      <h3>Add A Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default AddBook;

/* COMPONENT HEIRARCHY
------------------ APP ----------------------
                /       \
       * AddBook *       BookList
                        /        \
                ShowBook          EditBook
*/