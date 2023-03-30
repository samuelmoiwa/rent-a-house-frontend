import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteHouse } from '../redux/house/deleteHouseSlice';

const DeleteHouse = ({ houseId, onSuccess }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this house?')) {
        dispatch(deleteHouse(houseId));
         
      }
  };

  return (
    <button onClick={handleDeleteClick}>Delete House</button>
  );
};

export default DeleteHouse;
