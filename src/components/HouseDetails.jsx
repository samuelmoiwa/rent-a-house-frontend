import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchHouses } from '../redux/house/displayHouseSlice';
import AddFavorite from './AddFavorite';

const HouseDetails = () => {
  const dispatch = useDispatch();
  const displayHouse = useSelector((state) => state.displayHouse);
 
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  // Check if houses property exists before trying to access it
  const houses = displayHouse && displayHouse.houses;
  const houseDetails = houses && houses.find((house) => house.id.toString() === id);

  return (
    <div>
      {houseDetails ? (
        <>
          <h1>{houseDetails.title}</h1>
          <p>{houseDetails.description}</p>
          <img src={`http://localhost:3000${houseDetails.image_url}`} alt={houseDetails.title} />
          <AddFavorite houseId={houseDetails.id} />
          ;
        </>
      ) : (
        <p>House Loading</p>
      )}
    </div>
  );
};

export default HouseDetails;
