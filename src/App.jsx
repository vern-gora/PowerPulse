import { Navigate, Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import { Rings } from 'react-loader-spinner';
import { Suspense } from 'react';
import Layout from 'components/Layout/Layout';
import { useSelector } from 'react-redux';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('pages/ExercisesPage/ExercisesPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

function App() {
  const isLoggedIn = useSelector(state => state.info.auth.isLoggedIn);

  return (
    <>
      <Suspense
        fallback={
          <Rings
            height="100"
            width="100"
            color="#e6533c"
            ariaLabel="rings-loading"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100vh',
            }}
            wrapperClass=""
            visible={true}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            WelcomePage
            <Route
              index
              element={
                <RestrictedRoute
                  redirectTo="/profile"
                  condition={() => !isLoggedIn}
                  component={<WelcomePage />}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <RestrictedRoute
                  redirectTo="/profile"
                  condition={() => !isLoggedIn}
                  component={<SignUpPage />}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  redirectTo="/profile"
                  condition={() => !isLoggedIn}
                  component={<SignInPage />}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute
                  redirectTo="/"
                  condition={isLoggedIn}
                  component={<ProfilePage />}
                />
              }
            />
            <Route
              path="/diary"
              element={
                <PrivateRoute
                  redirectTo="/"
                  condition={isLoggedIn}
                  component={<DiaryPage />}
                />
              }
            />
            <Route
              path="/products"
              element={
                <PrivateRoute
                  redirectTo="/"
                  condition={isLoggedIn}
                  component={<ProductsPage />}
                />
              }
            />
            <Route
              path="/exercises"
              element={
                <PrivateRoute
                  redirectTo="/"
                  condition={isLoggedIn}
                  component={<ExercisesPage />}
                />
              }
            />
            <Route
              path="/error"
              element={
                <PrivateRoute
                  redirectTo="/"
                  condition={isLoggedIn}
                  component={<ErrorPage />}
                />
              }
            />
            <Route path="*" element={<Navigate to="/error" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
