import React from 'react';
import MainPage from './pages/mainPage';
import { AuthContextProvider } from './context/AuthContext';


const HomePage = () => {
  return (
    <AuthContextProvider>
      <div>
          <MainPage />
      </div>
  </AuthContextProvider>
    
    
  );
};

export default HomePage;
