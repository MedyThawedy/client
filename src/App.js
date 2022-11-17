import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Home from './pages/home/Home';
import MeditationDetails from './components/meditation/MeditationDetails';
import './App.css';
import Music from './components/music/Music';
import Meditate from './components/meditate/Meditate';



function App() {
  return (
    <main >

      <BrowserRouter>
        {/* <Navigation handleSearchValue={(e) => e.target.value} /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/meditate" element={<Meditate />} />

          {/*    <Route path="/yogapage/:id" element={<YogaDetailspage />} /> */}
          <Route path="/meditationpage/:meditationid" element={<MeditationDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
