/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchHouses } from '../redux/house/displayHouseSlice';
import AddFavorite from './AddFavorite';
import NavBar from './navBar/NavBar';


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
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 p-10 ">
        <h1 className="text-center text-2xl font-bold mb-5"> House Details</h1>
        {houseDetails ? (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
            <img src={`http://localhost:3000${houseDetails.image_url}`} alt={houseDetails.title} className="w-full h-96 object-cover" />
            <div className="p-4">
              <h1 className="text-2xl font-bold">{houseDetails.title}</h1>
              <p className="text-gray-700 my-2">{houseDetails.description}</p>
              <AddFavorite houseId={houseDetails.id} />
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

    </>
  );
};

export default HouseDetails;
