import React from 'react';
import LogoutButton from './auth/Logout';
import MainPage from './MainPage';
import NavBar from './navBar/NavBar';

const Home = () => (
  <div>
    <NavBar />
    <LogoutButton />
    <MainPage />
    
  </div>
);

export default Home;
