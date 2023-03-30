import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/user/currentUserSlice';

const MyHouses = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.currentUser);

    useEffect(() => {
        dispatch(getCurrentUser())
    }, [dispatch])

   // Check if user property exists before trying to access it
  const user = currentUser && currentUser.houses;
 
  return (
    <div>
        {user && (
            <div>
                {user.houses ? (
                    <ul>
                        {
                        user.houses.map((house) => (
                            <div key={house.id}>
                            <li>{house.title}</li>
                            <li><img src={house.image_url} width={80} height={50}/></li>
                            <button id={house.id} className='bg-button-color py-2 px-3'>Delete House</button>
                            </div>  
                        ))
                        }
                    </ul>
                ):( 
                <div>
                    <p>You have no houses Added.</p>
                    <button className='bg-button-color py-2 px-3' onClick={() => useNavigate('/addhouse')}>Add A House</button>
                </div>
                )}
            </div>
        )}
    </div>
)
}

export default MyHouses;