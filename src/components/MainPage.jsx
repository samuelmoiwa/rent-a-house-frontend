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
  console.log(houses)

  return (
    <div>
      {houses && houses.map((house) => (
        <div key={house.id}>
          <h2>{house.title}</h2>
          <p>{house.description}</p>
          <p>{house.price}</p>
          {house.image_url && <img src={house.image_url} alt="My Image" />}
          <div onClick={() => navigate(`/house-details/${house.id}`)}>House Details</div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
