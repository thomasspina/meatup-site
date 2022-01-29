import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './components/pages/AllMeetups';
import NewMeetupPage from './components/pages/NewMeetup';
import FavoritesPage from './components/pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
  <div>
      <MainNavigation />
      <Routes>
        <Route exact path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} /> 
        <Route path='/favorites' element={<FavoritesPage />} /> 
      </Routes>
  </div>
  );
}

export default App;
