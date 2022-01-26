import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';


function App() {
  return (
  <div>
      <Routes>
        <Route exact path='/' element={<AllMeetupsPage />} />
        <Route exact path='/new-meetup' element={<NewMeetupPage />} /> 
        <Route exact path='/favorites' element={<FavoritesPage />} /> 
      </Routes>
  </div>
  );
}

export default App;
