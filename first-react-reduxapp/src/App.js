import './App.css';
import { UseSelector, useDispatch, useSelector } from 'react-redux';

import Card from './components/Card.js'
import Navbar from './components/Navbar.js'
import LoginForm from './components/LoginForm.js';

function App() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
        {isAuthenticated ? <Card/> : <LoginForm/>}
      </header>
    </div>
  );
}

export default App;
