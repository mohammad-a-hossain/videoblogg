import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Video } from './pages/Video'
import Navbar from './components/Navbar/index';
import { Footer } from './components/Footer/index';

function App() {
  return (
    <Router>
     <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/videos/:videoId' element={<Video/>}/>
    </Routes>
    <Footer/>
    </Router> 
  )
}

export default App;
