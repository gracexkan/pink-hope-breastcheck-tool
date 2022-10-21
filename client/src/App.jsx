import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import SelfCheck from './pages/SelfCheck';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< Calendar />}></Route>
          <Route exact path='/contact' element={< SelfCheck />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
