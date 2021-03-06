import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
      <hr />
    </nav>
  );
}

export default Navbar;
