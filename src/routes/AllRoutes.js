import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { paths } from './Path';
import Home from '../Layout/Home';
import Dashboard from '../main/Dashboard';
import Layout from '../Layout/Layout';
import AddEditItemPage from '../pages/AddItems'
import AuthModal from '../auth/AuthModal';
import { Navigate } from 'react-router-dom';

const routes = createRoutesFromElements(
  <Route>
<Route path="/" element={<Navigate to={paths.login} replace />} />

  <Route path="/" element={<Layout />}>
    <Route path={paths.home} element={<Home />} />
    <Route path={paths.dashboard} element={<Dashboard />} />
    <Route path={paths.add} element={<AddEditItemPage/>}/>
    <Route path={paths.edit} element={<AddEditItemPage/>}/>

  </Route>
      <Route path={paths.login} element={<AuthModal />} />
      </Route>

);

export const allRoutes = createBrowserRouter(routes);
