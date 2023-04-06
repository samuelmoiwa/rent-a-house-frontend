import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favorite/addFavoriteSlice';

const AddFavorite = ({ houseId }) => {
  const dispatch = useDispatch();
  const houseIdData = {favorite: {house_id: houseId}}

  const handleAddFavorites = () => {
    dispatch(addFavorite(houseId, houseIdData));
  };
 
  return (
    <button onClick={handleAddFavorites} className="bg-button-color py-2 px-3">
      Add To Favorites
    </button>
  );
};

export default AddFavorite;