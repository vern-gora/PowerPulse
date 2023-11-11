import { Navigate, Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import { Rings } from 'react-loader-spinner';
import { Suspense } from 'react';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('pages/ExercisesPage/ExercisesPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));


function App() {

  return (
      <>
        <Suspense
          fallback={
            <Rings
              height='100'
              width='100'
              color='#e6533c'
              ariaLabel='rings-loading'
              wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
              }}
              wrapperClass=''
              visible={true}
              firstLineColor=''
              middleLineColor=''
              lastLineColor=''
            />
          }
        >
          <Routes>
            <Route index element={<WelcomePage />} />
            <Route
              path='/signup'
              element={<SignUpPage />}
            />
            <Route
              path='/signin'
              element={<SignInPage />}
            />
            <Route
              path='/profile'
              element={<ProfilePage />}
            />
            <Route
              path='/diary'
              element={<DiaryPage />}
            />
            <Route
              path='/products'
              element={<ProductsPage />}
            />
            <Route
              path='/exercises'
              element={<ExercisesPage />}
            />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='*' element={<Navigate to='/error' />} />
          </Routes>
        </Suspense>
      </>)
}

export default App;
