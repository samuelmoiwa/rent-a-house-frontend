/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/user/currentUserSlice';
import { deleteHouse } from '../redux/house/deleteHouseSlice';
// import { updateHouse } from '../redux/house/updateHouseSlice';
import NavBar from './navBar/NavBar';

const MyHouses = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  // Check if user property exists before trying to access it
  const user = currentUser && currentUser.currentUser;

  const modal = document.getElementById('myModal');
  const confirmButton = document.getElementById('confirm-button');
  const cancelButton = document.getElementById('cancel-button');

  const handleDeleteHouse = (houseId) => {
    modal.style.display = 'flex';
    confirmButton.addEventListener('click', () => {
      dispatch(deleteHouse(houseId));
      window.location.reload();
    });
    cancelButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };

  return (
    <>
      <NavBar />

      <div id="myModal" className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 hidden ">
        <div className="bg-white rounded-lg p-6">
          <p className="text-lg">Are you sure you want to delete this house?</p>
          <div className="flex justify-end mt-4">
            <button id="confirm-button" className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2">Confirm</button>
            <button id="cancel-button" className="border-gray-300 border py-2 px-4 rounded-lg">Cancel</button>
          </div>
        </div>
      </div>

      <div className="text-center xl:ml-52 p-10">
        {user && (
        <div>
          {user.houses ? (
            <ul className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {user.houses.map((house) => (
                <li
                  key={house.id}
                  className="col-span-1 flex flex-col text-center
                bg-white rounded-lg shadow divide-y divide-gray-200"
                >
                  <div className="flex-1 flex flex-col p-8">
                    <img
                      className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-md object-cover"
                      src={house.image_url}
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">{house.title}</h3>
                  </div>
                  <div>
                    <button
                      id={house.id}
                      className="bg-button-color py-2 px-3 rounded-b-lg
                    hover:bg-button-hover-color focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-button-color text-white"
                      onClick={() => handleDeleteHouse(house.id)}
                    >
                      Delete House
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-8">
              <p className="text-lg font-medium text-gray-900">You have no houses Added.</p>
              <button
                className="mt-8 bg-button-color py-2 px-3 rounded-lg hover:bg-button-hover-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button-color"
                onClick={() => navigate('/addhouse')}
              >
                Add A House
              </button>
            </div>
          )}
        </div>
        )}
      </div>
    </>
  );
};

export default MyHouses;
