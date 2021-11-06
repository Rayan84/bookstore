import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateNewBook from './createNewBook';
import { removeBook } from '../redux/books/books';

const Booklist = () => {
  const items = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <CreateNewBook />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>
              {item.id}
            </p>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <button type="button" onClick={() => deleteHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
