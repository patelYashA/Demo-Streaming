import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Content from "./components/Content"
import Series from './components/Series';
import Movies from './components/Movies';
import Error from "./components/Error"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
