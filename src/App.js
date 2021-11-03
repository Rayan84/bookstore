
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Books from './redux/books/books.js';
import Categories from './redux/categories/categories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
              <ul>
               <li><Link to="/">Books</Link></li>
               <li><Link to="./categories">Categories</Link></li>
              </ul>
              <hr />
          </nav>
          <Switch>
            <Route path="/"><Books /></Route>
            <Route path="/categories"><Categories /></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
