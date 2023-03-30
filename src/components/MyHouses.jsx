import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/user/currentUserSlice';
import DeleteHouse from './DeleteHouse';

const MyHouses = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.currentUser);
    const navigate = useNavigate();
    const [deleteHouseId, setDeleteHouseId] = useState(null);

    useEffect(() => {
        dispatch(getCurrentUser())
    }, [dispatch])
 
    const handleAddHouseClick = () => {
        navigate('/addhouse');
    }

    const handleDelete = (e, houseId) => {
        e.preventDefault()
        setDeleteHouseId(houseId);
    }
    
    // Check if user property exists before trying to access it
    const user = currentUser && currentUser.currentUser;
 
    return (
        <div>
            {user && (
                <div>
                    {user.houses ? (
                        <ul>
                            {user.houses.map((house) => (
                                <div key={house.id}>
                                    <li>{house.title}</li>
                                    <li><img src={house.image_url} width={80} height={50}/></li>
                                    <div>
                                        <button onClick={(e) => handleDelete(e, house.id)} className='bg-button-color py-2 px-3'>Delete House</button>
                                        {deleteHouseId === house.id && <DeleteHouse houseId={house.id} />}
                                    </div>
                                </div>  
                            ))}
                        </ul>
                    ) : ( 
                        <div>
                            <p>You have no houses Added.</p>
                            <button className='bg-button-color py-2 px-3' onClick={handleAddHouseClick}>Add A House</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default MyHouses;
