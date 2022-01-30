import { Route, Routes } from 'react-router-dom';

import AllMeatupsPage from './pages/AllMeatups';
import NewMeatupPage from './pages/NewMeatup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
  <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeatupsPage />} />
        <Route path='/new-meatups' element={<NewMeatupPage />} /> 
        <Route path='/favorites' element={<FavoritesPage />} /> 
      </Routes>
  </div>
  );
}

export default App;
