import axios from 'axios';

const FETCH_BOOKS_REQUEST = 'bookStore/books/fetch_request';
const FETCH_BOOKS_SUCCESS = 'bookStore/books/fetch_success';
const FETCH_BOOKS_FAILURE = 'bookStore/books/fetch_failure';
const Full_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fUrhkUGF4jmdoIuVYopl';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const initialState = {
   books: [],
  };

  export const fetchBooksRequest = () => ({
    type: FETCH_BOOKS_REQUEST,
  });
  export const fetchBooksSuccess = (payload) => ({
    type: FETCH_BOOKS_SUCCESS,
    payload,
  });




const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooksFailure = (payload) => ({
  type: fetchBooksFailure,
  payload,
})

export const fetchBooks = () => (dispatch) => {
  dispatch(fetchBooksRequest());
}

export default reducer;
