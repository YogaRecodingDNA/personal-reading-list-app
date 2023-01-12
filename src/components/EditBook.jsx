import { useState } from 'react'

const EditBook = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Command control of form

    onSubmit(book.id, title); // Current book plus current state title
    console.log("New title is ", title);
  }

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">
        Save
      </button>
    </form>
  )
}

export default EditBook;


/* COMPONENT HEIRARCHY
------------------ APP ----------------------
                /      \
         AddBook        BookList
                       /        \
              ShowBook          EditBook
*/