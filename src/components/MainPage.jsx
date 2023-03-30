/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchHouses } from '../redux/house/displayHouseSlice';
import NavBar from './navBar/NavBar';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayHouse = useSelector((state) => state.displayHouse);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  // Check if houses property exists before trying to access it
  const houses = displayHouse && displayHouse.houses;
  console.log(houses)

  return (
    <div>
      <NavBar />
      {houses && houses.map((house) => (
        <div key={house.id}>
          <h2>{house.title}</h2>
          <p>{house.description}</p>
          <p>{house.price}</p>
          {house.image_url && <img src={`http://localhost:3000${house.image_url}`} width={100} height={100} alt="My Image" />}
          <div onClick={() => navigate(`/house-details/${house.id}`)}>House Details</div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
