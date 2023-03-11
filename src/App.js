import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.js'
import SignUpPage from './pages/SignUpPage.js'
import HomePage from './pages/HomePage'
import Collections from './pages/Collections'
import ExploreItems from './pages/ExploreItems'
import ProductDetail from './pages/ProductDetail'
import MyCart from './pages/MyCart'
import ProfilePage from './pages/ProfilePage.js'
import ProductsPage from './pages/ProductsPage.js'
import SellPage from './pages/SellPage.js'
import CommentPage from './pages/CommentPage.js'
import IsLogged from './components/IsLogged.js';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/profile' element={<IsLogged><ProfilePage /></IsLogged>} />
      <Route path='/sell' element={<IsLogged><SellPage /></IsLogged>} />
      <Route path='/products' element={<IsLogged><ProductsPage /></IsLogged>} />
      <Route path='/comment' element={<IsLogged><CommentPage /></IsLogged>} />
      <Route path='/collections' element={<Collections />} />
      <Route path='/exploreItems' element={<ExploreItems />} />
      <Route path='/products/:productId' element={<ProductDetail />} />
      <Route path='/myCart' element={<MyCart />} />
    </Routes>
  );
}

export default App
