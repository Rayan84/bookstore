import React from 'react';
import CreateNewBook from '../../components/createNewBook';

function Books(title, author) {
  return (
    <div>
      <h1>List of books:</h1>
      <p>{title}{author}</p>
      <button type="button">Delete</button>
      <CreateNewBook />
      <br />
      <br />
    </div>
  );
}

export default Books;
