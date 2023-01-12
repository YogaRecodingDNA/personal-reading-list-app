import { useState } from 'react';
import EditBook from './EditBook';

const ShowBook = ({ book, onEdit, onDelete }) => {
  const [viewEdit, setViewEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setViewEdit(!viewEdit);
  }
  
  const handleSubmit = (id, newTitle) => {
    setViewEdit(false);
    onEdit(id, newTitle);
  }

  let display = <h3>{book.title}</h3>;
  if (viewEdit) {
    display = <EditBook book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{display}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
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