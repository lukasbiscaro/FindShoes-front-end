import './App.css';
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.js'
import SignUpPage from './pages/SignUpPage.js'
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Collections from './pages/Collections';
import ExploreItems from './pages/ExploreItems';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/exploreItems' element={<ExploreItems />} />
      </Routes>
    </div>
  );
}

export default App;
