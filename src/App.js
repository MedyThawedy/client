import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Home from './pages/home/Home';
import MeditationDetails from './components/meditation/MeditationDetails';
import YogaDetails from './components/yogadetails/YogaDetails';
import './App.css';
import Music from './components/music/Music';
import Meditate from './components/meditate/Meditate';
import Yoga from './components/yoga/Yoga';
import MeditateAll from './components/meditate/MeditateAll';
import MeditateAnxious from './components/meditate/MeditateAnxious';
import MeditateFavorites from './components/meditate/MeditateFavorites';
import MeditateKids from './components/meditate/MeditateKids';
import MeditateSleep from './components/meditate/MeditateSleep';
import Yogaall from './components/yoga/Yogaall';
import Yogaanxious from './components/yoga/Yogaanxious';
import Yogafavorites from './components/yoga/Yogafavorites';
import Yogakids from './components/yoga/Yogakids';
import Yogasleep from './components/yoga/Yogasleep';
import Login from './pages/login/Login'
import Signin from './pages/signin/Signin'
import Guard from './pages/signin/Guard';
import Signup from './pages/signup/Signup'
import Profile from './components/profile/Profile';

function App() {
  return (
    <main >

      <BrowserRouter>
        {/* <Navigation handleSearchValue={(e) => e.target.value} /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Guard />}>
            <Route path="/home" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/meditate" element={<Meditate />} />
            <Route path="/meditateall" element={<MeditateAll />} />
            <Route path="/meditatefavorites" element={<MeditateFavorites />} />
            <Route path="/meditateanxious" element={<MeditateAnxious />} />
            <Route path="/meditatesleep" element={<MeditateSleep />} />
            <Route path="/meditateKids" element={<MeditateKids />} />
            <Route path="/yoga" element={<Yoga />} />
            <Route path="/yogaall" element={<Yogaall />} />
            <Route path="/yogafavorites" element={<Yogafavorites />} />
            <Route path="/yogaanxious" element={<Yogaanxious />} />
            <Route path="/yogasleep" element={<Yogasleep />} />
            <Route path="/yogakids" element={<Yogakids />} />
            <Route path="/getyoga/:yogaid" element={<YogaDetails />} />
            <Route path="/meditationpage/:meditationid" element={<MeditationDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
