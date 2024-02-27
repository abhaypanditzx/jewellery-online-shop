import React, { useState, useEffect, useContext } from 'react';

import UserContext from "./Context"
import Home from './pages/Home';
import Product from "./pages/Product"
import About from "./pages/About"

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SearchResult from './components/SearchResult';
import ProductName from './ProductName';
function App() {
  const {name } = useContext(UserContext)

  return (
   <>
   <Navbar/>
   
   <SearchResult/>
   <Sidebar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='About' element={<About/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
