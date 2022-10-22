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
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route exact path='/' element={< Calendar />}></Route>
          <Route exact path='/self-check' element={< SelfCheck />}></Route>
          <Route exact path='/resources' element={< Resources />}></Route>
          <Route exact path='/profile' element={< Profile />}></Route>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
