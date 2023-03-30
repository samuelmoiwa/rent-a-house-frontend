import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/user/currentUserSlice';

function Favorite() {
    const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser.currentUser) {
      setHouses(currentUser.currentUser.favorites || []);
    }
  }, [currentUser]);

  return (
    <div>
      
    </div>
  )
}

export default Favorite
