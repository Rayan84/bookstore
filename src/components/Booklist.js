import React from 'react';
import { removeBook } from '../redux/books/books';
import CreateNewBook from './createNewBook';
import { useSelector, useDispatch } from 'react-redux';

const Booklist = () => {
  const items = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removeBook(id));
  }
  return (
    <div>
      <CreateNewBook />
      <ul>
        {items.map((item) => (
          <li key={ item.id }>
            <p>{ item.id } </p>
            <p>{ item.title }</p>
            <p>{ item.author }</p>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Booklist;
