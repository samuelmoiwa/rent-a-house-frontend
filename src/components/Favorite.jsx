import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/user/currentUserSlice';

function Favorite() {
    const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  // Initialize local state for favorite items
  const [favorites, setFavorites] = useState([]);

  // Dispatch getCurrentUser() action when component mounts
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  // Update local state with favorite items when currentUser data changes
  useEffect(() => {
    if (currentUser.currentUser) {
      setFavorites(currentUser.currentUser.favorites || []);
    }
  }, [currentUser]);

export default Favorite
