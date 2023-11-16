import { Navigate, Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import { Rings } from 'react-loader-spinner';
import { Suspense } from 'react';
import Layout from 'components/Layout/Layout';
import { useSelector } from 'react-redux';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';
import ExerciseModal from 'components/ExercisesTable/ExercisesTable';
import { Toaster } from 'react-hot-toast';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('pages/ExercisesPage/ExercisesPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

// const RestrictedRoute = lazy(() => import('../src/RestrictedRoute'));
// const PrivateRoute = lazy(() => import('../src/PrivateRoute'));

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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
                  redirectTo="/diary"
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
                <RestrictedRoute
                  redirectTo="/"
                  condition={isLoggedIn}
                  component={<ErrorPage />}
                />
              }
            />
            <Route path="/modal" element={<ExerciseModal />} />
            <Route path="*" element={<Navigate to="/error" />} />
          </Route>
        </Routes>
        <Toaster
          toastOptions={{
            duration: 5000,
            style: {
              background: '#303030',
              color: '#fff',
            },
            success: {
              duration: 3000,
              style: {
                border: '1px solid #3CBF61',
              },
            },
            error: {
              duration: 3000,
              style: {
                border: '1px solid #D80027',
              },
            },
          }}
        />
      </Suspense>
    </>
  );
}

export default App;
