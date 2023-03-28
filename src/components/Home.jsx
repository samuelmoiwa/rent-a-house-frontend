import React from 'react';
import LogoutButton from './auth/Logout';
import NavBar from './navBar/NavBar';

const Home = () => (
  <div>
    <NavBar />
    <LogoutButton />
    <h1>Home</h1>
  </div>
);

export default Home;
