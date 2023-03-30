/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/SignUp';
import Logout from './components/auth/Logout';
import AddHouse from './components/AddHouse';
import HouseDetails from './components/HouseDetails';
import MyHouses from './components/MyHouses';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/addhouse" element={<AddHouse />} />
      <Route path="/deletehouse" element={<MyHouses />} />
      <Route path="house-details/:id" element={<HouseDetails />} />
    </Routes>
  );
}

export default App;
