import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Login from '@pages/Login';

// TODO fix lazy loading???
// const HomePage = lazy(() => import("@pages/Home/Home"));

const RouterComponent: FC = () => (
  <Routes>
    <Route path={'/'} element={<Home />} />
    <Route path={'*'} element={<Home />} />
    <Route path={'/login'} element={<Login />} />
  </Routes>
);

export default RouterComponent;
