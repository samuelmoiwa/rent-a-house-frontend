import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favorite/addFavoriteSlice';

const AddFavorite = ({ house.id }) => {
  const dispatch = useDispatch();

  const handleAddFavorites = () => {
    dispatch(addFavorite(house.id));
  };
  console.log(houseId)

  return (
    <button onClick={handleAddFavorites} className="bg-button-color py-2 px-3">
      Add To Favorites
    </button>
  );
};

export default AddFavorite;
