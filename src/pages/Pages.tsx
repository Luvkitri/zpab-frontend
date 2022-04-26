import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { isAdmin } from '@utils/login';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Account from '@pages/Account';
import AddAccommodation from './AddAccommodation';
import AccommodationView from './AccommodationView';
import AdminPanel from './AdminPanel';

// TODO fix lazy loading???
// const HomePage = lazy(() => import("@pages/Home/Home"));

const RouterComponent: FC = () => (
  <Routes>
    <Route path={'/'} element={<Home />} />
    <Route path={'*'} element={<p>There's nothing here: 404!</p>} />
    <Route path={'/login'} element={<Login />} />
    <Route path={'/register'} element={<Register />} />
    <Route path={'/account'} element={<Account />} />
    <Route path={'/add'} element={<AddAccommodation />} />
    <Route path={'/accommodation'} element={<AccommodationView />} />
    <Route
      path={'/admin'}
      element={isAdmin() ? <AdminPanel /> : <p>No access rights!</p>}
    />
  </Routes>
);

export default RouterComponent;
