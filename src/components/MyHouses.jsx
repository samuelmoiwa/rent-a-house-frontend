import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/user/currentUserSlice';

const MyHouses = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.currentUser);

    useEffect(() => {
        dispatch(getCurrentUser())
    }, [dispatch])

   // Check if user property exists before trying to access it
  const user = currentUser && currentUser.houses;
  console.log(user)
 
  return (
    <div>
        {user && (
            <div>
                <h1>{user.email}</h1>
                {user.houses && (
                    <ul>
                        {user.houses.map((house) => (
                            <li key={house.id}>{house.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        )}
    </div>
)
}

export default MyHouses;