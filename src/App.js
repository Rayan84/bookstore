import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/navbar';
import Booklist from './components/Booklist';
import Categories from './redux/categories/categories';
import Store from './redux/configureStore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={Store}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/categories"><Categories /></Route>
              <Route path="/"><Booklist /></Route>
            </Switch>
          </Router>
        </Provider>
      </header>
    </div>
  );
}

export default App;
