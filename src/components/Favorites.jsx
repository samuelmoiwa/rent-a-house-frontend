import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/user/currentUserSlice';
import NavBar from './navBar/NavBar';

const Favorites = () => {
  // Initialize Redux hooks
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const addFavorites = useSelector((state) => state.addFavorites);

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
    <>
      <NavBar />
      <div className="py-4 xl:ml-52 p-10">
        {addFavorites.status === 'success' && <p className="text-green-500">{addFavorites.message}</p>}
        {addFavorites.status === 'error' && <p className="text-red-500">{addFavorites.message}</p>}

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {favorites.map((favorite) => (
              <div className="bg-white rounded-lg shadow-md overflow-hidden" key={favorite.id}>
                <img className="w-full h-52 object-cover" src={favorite.image_url} alt={favorite.house_title} />
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{favorite.house_title}</h3>
                  <p className="text-gray-500">{favorite.house_location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">You have no favorites added.</p>
        )}
      </div>
    </>
  );
}

export default Favorites;
