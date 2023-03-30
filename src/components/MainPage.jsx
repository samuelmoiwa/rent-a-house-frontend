/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchHouses } from '../redux/house/displayHouseSlice';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayHouse = useSelector((state) => state.displayHouse);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  // Check if houses property exists before trying to access it
  const houses = displayHouse && displayHouse.houses;
  console.log(houses);

  return (
    <div className="container mx-auto xl:ml-52 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Houses for Rent</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {houses && houses.map((house) => (
          <div className="bg-white rounded-lg shadow-lg p-4" key={house.id}>
            <img
              className="w-full h-52 object-cover rounded-t-lg"
              src={`http://localhost:3000${house.image_url}`}
              alt="House Image"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{house.title}</h2>
              <p className="text-gray-700 mb-4">{house.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">
                  $
                  {house.price}
                  /mo
                </p>
                <button
                  className="bg-button-color hover:bg-button-hover-color text-white font-bold py-2 px-4 rounded"
                  onClick={() => navigate(`/house-details/${house.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
