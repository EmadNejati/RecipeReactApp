import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Organisms/Home';
import NotFound from './Components/Organisms/NotFound';
import Header from './Components/Molecules/Header';
import Footer from './Components/Molecules/Footer';
import Product from './Components/Organisms/Product';
import Country from './Components/Organisms/Country';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header countryList={[1,2,3,4]}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='country' element={<Country/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
