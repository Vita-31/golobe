import { FC } from 'react';
import { Routes, Route } from "react-router-dom";
import { Header } from './features/Header';
import { Footer } from './features/Footer';
import { Home } from './pages/home/Home';

export const App: FC = () => {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};
