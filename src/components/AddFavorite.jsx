import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favorite/addFavoriteSlice';

const AddFavorite = ({ houseId }) => {
    const dispatch = useDispatch();

const handleAddToFavorites = () => {
    dispatch(addToFavorites(houseId));
};