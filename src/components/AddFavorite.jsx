import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favorite/addFavoriteSlice';

const AddFavorite = ({ houseId }) => {
  const dispatch = useDispatch();

  const handleAddFavorites = () => {
    dispatch(addFavorite(houseId));
  };
  return (
    <button onClick={handleAddFavorites} className="bg-button-color py-2 px-3">
      Add To Favorites
    </button>
  );
};

export default AddFavorite;
