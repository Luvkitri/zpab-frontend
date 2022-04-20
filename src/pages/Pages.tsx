import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Account from '@pages/Account';
import AddAccommodation from './AddAccommodation';

// TODO fix lazy loading???
// const HomePage = lazy(() => import("@pages/Home/Home"));

const RouterComponent: FC = () => (
  <Routes>
    <Route path={'/'} element={<Home />} />
    <Route path={'*'} element={<Home />} />
    <Route path={'/login'} element={<Login />} />
    <Route path={'/register'} element={<Register />} />
    <Route path={'/account'} element={<Account />} />
    <Route path={'/add'} element={<AddAccommodation />} />
  </Routes>
);

export default RouterComponent;
