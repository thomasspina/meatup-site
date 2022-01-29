import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './components/pages/AllMeetups';
import NewMeatupPage from './components/pages/NewMeatup';
import FavoritesPage from './components/pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
  <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meatups' element={<NewMeatupPage />} /> 
        <Route path='/favorites' element={<FavoritesPage />} /> 
      </Routes>
  </div>
  );
}

export default App;
