import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHouse } from '../redux/house/addHouseSlice';

const MainPage = () => {
    // Select the necessary properties from the Redux store
    const houses = useSelector((state) => state.house.houses);
    const isLoading = useSelector((state) => state.house.isLoading);
    const error = useSelector((state) => state.house.error);

    // Get the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Use the useEffect hook to fetch houses when the component mounts
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  // If the houses are still loading, display a loading message
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If there was an error fetching the houses, display an error message
  if (error) {
    return <div>Error: {error}</div>;
  }
  
export default MainPage
