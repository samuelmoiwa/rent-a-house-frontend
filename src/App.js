/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/SignUp';
import Logout from './components/auth/Logout';
import AddHouse from './components/AddHouse';
import MainPage from './components/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/addhouse" element={<AddHouse />} />
      <Route path="/mainpage" element={<MainPage />} />

    </Routes>
  );
}

export default App;
