import './App.scss';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <Suspense fallback="f">
      <Routes>
        <Route path='/' exact element={<LandingPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
