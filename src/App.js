/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import useToken from './redux/auth/useToken';
import { getAuthenticatedUser } from './redux/auth/authSlice';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/SignUp';

function App() {
  const isTokenSet = useToken();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isTokenSet) dispatch(getAuthenticatedUser());
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
