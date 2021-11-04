import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';

import Booklist from './components/booklist';
import Categories from './redux/categories/categories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/categories"><Categories /></Route>
            <Route path="/"><Booklist /></Route>
          </Switch>
        </Router>

      </header>
    </div>
  );
}

export default App;
