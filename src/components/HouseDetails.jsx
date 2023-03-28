import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchHouses } from '../redux/house/displayHouseSlice';

const HouseDetails = () => {
  const dispatch = useDispatch();
  const displayHouse = useSelector((state) => state.displayHouse);

  const { id } = useParams();
 

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);
  
  // Check if houses property exists before trying to access it
  const houses = displayHouse && displayHouse.houses;
  const houseid = houses && houses.find(house => house.id.toString() === id)
  console.log(houseid)


    return (
        <div></div>
    )

}

export default HouseDetails