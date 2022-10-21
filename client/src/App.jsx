import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Calendar from './pages/Calendar';
import SelfCheck from './pages/SelfCheck';
import Resources from './pages/Resources';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Calendar</Link>
          </li>
          <li>
            <Link to="/self-check">Self Check</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={< Calendar />}></Route>
          <Route exact path='/self-check' element={< SelfCheck />}></Route>
          <Route exact path='/resources' element={< Resources />}></Route>
          <Route exact path='/profile' element={< Profile />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
