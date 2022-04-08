import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

import './scss/style.scss';
import './components/Login/_login.scss';
import './components/LikedMusic/_likedMusic.scss';
import './components/Navbar/_navbar.scss';
import './components/Music/_music.scss';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Login />
    </div>
  );
}

export default App;
