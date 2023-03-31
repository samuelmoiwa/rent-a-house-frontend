import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/user/currentUserSlice';

function Favorites() {
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
  console.log(favorites);

  // Render favorite items or message
  return (
    <div>
    {favorites.length > 0 ? (
      <ul>
        {favorites.map((favorite) => (
          <div key={favorite.id}>
            <li>{favorite.house_title}</li>
            <li>
              <img src={favorite.image_url} width={80} height={50} />
            </li>
          </div>
        ))}
      </ul>
    ) : (
        <p>You have no favorites added.</p>
    )}
  </div>
  );
}

export default Favorites;
