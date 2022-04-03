import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';

// TODO fix lazy loading???
// const HomePage = lazy(() => import("@pages/Home/Home"));

const RouterComponent: FC = () => (
  <Routes>
    <Route path={'/'} element={<Home />} />
    <Route path={'*'} element={<Home />} />
  </Routes>
);

export default RouterComponent;
