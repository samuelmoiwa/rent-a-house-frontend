import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/user/currentUserSlice';

function Favorite() {
  // Initialize Redux hooks
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

  // Render favorite items or message
  return (
    <div>
      {favorites.length === 0 ? (
        <p>No favorites found.</p>
      ) : (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>{favorite.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorite;
