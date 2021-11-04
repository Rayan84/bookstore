import React from 'react';

function CreateNewBook() {
  return (
    <div>
      <p>Add New Book</p>
      <form action="#">
        <label htmlFor="name">
          Book Name
          <input type="text" name="name" id="name" />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateNewBook;
