import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/user/currentUserSlice';

const MyHouses = () => {
    const dispatch = useDispatch()
    const displayUser = useSelector((state) => state.displayUser);

    useEffect(() => {
        dispatch(getCurrentUser)
    }, [dispatch])

   // Check if user property exists before trying to access it
  const user = displayUser && displayUser.currentUser;
  console.log(user)

    return (
        <div>MyHouses</div>
    )
}

export default MyHouses;