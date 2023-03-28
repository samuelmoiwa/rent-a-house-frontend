import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../redux/house/displayHouseSlice';

const HouseDetails = () => {
    const dispatch = useDispatch();
  const displayHouse = useSelector((state) => state.displayHouse);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);
  
  // Check if houses property exists before trying to access it
  const houses = displayHouse && displayHouse.houses;

    return (
        <div></div>
    )

}