import { FC } from 'react';
import { Header } from './features/Header';
import { Footer } from './features/Footer';

export const App: FC = () => {
  return (
    <>
      <Header />
      {/* router */}
      <Footer />
    </>
  );
};
