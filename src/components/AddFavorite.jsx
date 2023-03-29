import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favorite/addFavoriteSlice';

const AddFavorite = ({ houseId }) => {
    const dispatch = useDispatch();

const handleAddToFavorites = () => {
    dispatch(addToFavorites(houseId));
};
return (
    <button onClick={handleAddToFavorites} className="bg-button-color py-2 px-3">
      Add To Favorites
    </button>
  );
};

export default AddFavorite;