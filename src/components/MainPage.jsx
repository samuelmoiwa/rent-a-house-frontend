import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHouse } from '../redux/house/addHouseSlice';

const MainPage = () => {
    // Select the necessary properties from the Redux store
    const houses = useSelector((state) => state.house.houses);
    const isLoading = useSelector((state) => state.house.isLoading);
    const error = useSelector((state) => state.house.error);

export default MainPage
