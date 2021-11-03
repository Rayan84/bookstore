
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Books from './redux/books/books.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/books"><books /></Route>
            <Route path="/categories"></Route>
          </Switch>
            <nav>
              <ul>
               <li><Link to="/"><books />Books</Link></li>
               <li><Link to="./categories">Categories</Link></li>
              </ul>
            </nav>
        </Router>
      </header>
    </div>
  );
}

export default App;
