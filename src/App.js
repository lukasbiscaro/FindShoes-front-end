import './App.css';
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.js'
import SignUpPage from './pages/SignUpPage.js'
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import IsLogged from './components/IsLogged.js';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/profile' element={
          <IsLogged>
            <ProfilePage />
          </IsLogged>
        } />
      </Routes>
    </div>
  );
}

export default App;
