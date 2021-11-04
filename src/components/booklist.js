import React from 'react';
import Book from '../redux/books/books';
import CreateNewBook from './createNewBook';

function Booklist() {
  const array = [];
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        <li>
          {() => {
            array.forEach((bookName, author) => {
              Book(bookName, author);
            });
          }}
        </li>
      </ul>
      <CreateNewBook />
    </div>
  );
}

export default Booklist;
