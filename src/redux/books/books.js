import React from "react";

function Books() {
    return(
        <div>
            <h1>List of books:</h1>
            <button>Delete</button>
            <br />
            <br />
            <br />
            <p>Add New Book</p>
          <form action="#">
            <label htmlFor="name">Book Name</label>
            <input type="text" name="name" id="name" />
            <br />
            <input type="submit" />
          </form>
        </div>
    )
}

export default Books;