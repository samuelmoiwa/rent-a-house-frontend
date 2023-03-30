import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/user/currentUserSlice';
import DeleteHouse from './DeleteHouse';

const MyHouses = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser.currentUser) {
      setHouses(currentUser.currentUser.houses || []);
    }
  }, [currentUser]);

  const handleAddHouseClick = () => {
    navigate('/addhouse');
  };


  return (
    <div>
      {houses.length > 0 ? (
        <ul>
          {houses.map((house) => (
            <div key={house.id}>
              <li>{house.title}</li>
              <li>
                <img src={house.image_url} width={80} height={50} />
              </li>
              <div>
              <DeleteHouse houseId={house.id} />

              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div>
          <p>You have no houses added.</p>
          <button className="bg-button-color py-2 px-3" onClick={handleAddHouseClick}>
            Add a House
          </button>
        </div>
      )}
    </div>
  );
};

export default MyHouses;
