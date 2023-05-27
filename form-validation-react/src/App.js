import logo from './logo.svg';
import Login from './components/forms/Login.js'
import './App.css';

import backgroundImage from './components/images/login-background.jpg'

function App() {
  return (
    <section style={{ backgroundImage: `url(${backgroundImage})`}}>
      <Login>

    </Login>
    </section>
  );
}

export default App;
