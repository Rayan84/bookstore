import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function CreateNewBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleAuthorChange = (event) => setAuthor(event.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(details));
  };
  return (
    <div>
      <p>Add New Book</p>
      <form action="#">
        <label htmlFor="name">
          Book Name
          <input type="text" name="title" id="title" onChange={handleTitleChange} />
        </label>
        <br />
        <label htmlFor="name">
          Author Name
          <input type="text" name="author" id="author" onChange={handleAuthorChange} />
        </label>
        <br />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default CreateNewBook;
