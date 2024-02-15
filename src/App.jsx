import React, { useState, useEffect, useContext } from 'react';

import UserContext from "./Context"
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SearchResult from './components/SearchResult';
function App() {
  const {name } = useContext(UserContext)

  return (
   <>
   <Navbar/>
   <SearchResult/>
   <Sidebar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
