import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage.js'
import LoginPage from './pages/LoginPage.js'
import ProfilePage from './pages/ProfilePage.js'
import SellPage from './pages/SellPage.js'
import ProductsPage from './pages/ProductsPage.js'
import CommentPage from './pages/CommentPage.js'
import ExploreItems from './pages/ExploreItems'
import ProductDetail from './pages/ProductDetail'
import MyCart from './pages/MyCart'
import IsLogged from './components/IsLogged.js'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/my-profile' element={<IsLogged><ProfilePage /></IsLogged>} />
      <Route path='/my-products' element={<IsLogged><ProductsPage /></IsLogged>} />
      <Route path='/my-comment' element={<IsLogged><CommentPage /></IsLogged>} />
      <Route path='/my-comment/:commentId' element={<IsLogged><CommentPage /></IsLogged>} />
      <Route path='/sell' element={<IsLogged><SellPage /></IsLogged>} />
      <Route path='/sell/:productId' element={<IsLogged><SellPage /></IsLogged>} />
      <Route path='/exploreItems' element={<ExploreItems />} />
      <Route path='/all-products/:productId' element={<ProductDetail />} />
      <Route path='/myCart' element={<MyCart />} />
    </Routes>
  );
}

export default App