/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../redux/house/displayHouseSlice';
import NavBar from './navBar/NavBar';

const MainPage = () => {
  const dispatch = useDispatch();
  const displayHouse = useSelector((state) => state.displayHouse);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  // Check if houses property exists before trying to access it
  const houses = displayHouse && displayHouse.houses;

  return (
    <div>
      <NavBar />
      {houses && houses.map((house) => (
        <div key={house.id}>
          <h2>{house.title}</h2>
          <p>{house.description}</p>
          <p>{house.price}</p>
          {house.image_url && (
          <img
            src={house.image_url}
            alt="My Image"
          />
          )}
        </div>
      ))}
    </div>
  );
};

export default MainPage;
