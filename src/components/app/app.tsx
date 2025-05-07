import {BrowserRouter, Route, Routes} from 'react-router-dom';

import type { Offer } from '../../types/types';

import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites/favorites';
import LoginPage from '../pages/login/login';
import PropertyNotLogged from '../pages/property/property-not-logged';
import PropertyPage from '../pages/property/property';
import PageNotFound from '../pages/not-found/404';

import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

type AppProps = {
  offers: Offer[];
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to="/login" />
  );
};

function App ({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage offers={offers} />}/>
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <FavoritesPage offers={offers} />
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoute.Property}/:id`} element={<PropertyPage />} />
        <Route path="/notlogged/" element={<PropertyNotLogged />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
