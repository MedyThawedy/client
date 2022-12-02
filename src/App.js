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
import Welcome from './pages/welcome/Welcome';
import Reminder from './components/reminder/Reminder';
import AddYoga from './components/contentadministration/AddYoga';
import YogaPrograms from './components/contentadministration/YogaPrograms';
import MeditationPrograms from './components/contentadministration/MeditationPrograms';
import MusicAdministration from './components/contentadministration/MusicAdministration';
import AppContext from './AppContext';
import { useContext } from 'react';

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <main >

      <BrowserRouter>
<AppContext.Provider value={{showNav, setShowNav}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Guard />}>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reminder" element={<Reminder />} />
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
            <Route path="/welcome" element={<Welcome />}></Route>
            <Route path="/reminder" element={<Reminder />}></Route>
            <Route path='/addyoga' element={<AddYoga />} />
            <Route path='/getyogaprograms' element={<YogaPrograms />} />
            <Route path='/getmeditationprograms' element={<MeditationPrograms />} />
            <Route path='/getallmusic' element={<MusicAdministration />} />
          </Route>
        </Routes>
   { showNav &&    <Footer />} 
   </AppContext.Provider>


      </BrowserRouter>
    </main>
  );
}

export default App;
