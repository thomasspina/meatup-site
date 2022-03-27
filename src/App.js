import { Route, Routes } from 'react-router-dom';

import AllMeatupsPage from './pages/AllMeatups';
import NewMeatupPage from './pages/NewMeatup';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeatupsPage />} />
        <Route path='/new-meatups' element={<NewMeatupPage />} /> 
        <Route path='/favourites' element={<FavouritesPage />} /> 
      </Routes>
    </Layout>
  );
}

export default App;
