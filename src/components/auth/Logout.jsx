/* eslint-disable react/button-has-type */
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/auth/logoutSlice';

function LogoutButton() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Remove the session token from local storage
    // localStorage.removeItem('access_token');
    // Dispatch the logoutSuccess action to update the authentication state
    dispatch(userLogout());
  };
  return <button className="bg-button-color py-2 px-3" onClick={handleLogout}>Logout</button>;
}
export default LogoutButton;
