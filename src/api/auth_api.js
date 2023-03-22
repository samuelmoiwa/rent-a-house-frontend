// Declare the base URL for API requests
const baseURL = 'http://localhost:3000/api/v1';

// Set authentication token in localStorage with Authorization value
const setAuthToken = ({ headers }) => localStorage.setItem('token', headers.get('Authorization'));

// Remove authentication token from localStorage
const unsetAuthToken = () => localStorage.removeItem('token');

// Function for creating HTTP headers with 'Authorization' value
const createHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: localStorage.getItem('token'),
  // define other common headers if needed
});

/*
  Define options for login, register and logout requests:
  - method: type of HTTP request method
  - headers: content-type and authorization headers
  - body: user data in JSON format
 */

const loginOptions = (user) => ({
  method: 'POST',
  headers: createHeaders(),
  body: JSON.stringify(user),
});

const registerOptions = (user) => ({
  method: 'POST',
  headers: createHeaders(),
  body: JSON.stringify(user),
});

const logoutOptions = () => ({
  method: 'DELETE',
  headers: createHeaders(),
});

// Create an object named api containing methods for API requests used in application
const api = {

  // Function for user registration request to the server
  register: async (user) => {
    const response = await fetch(`${baseURL}/register`, {
      ...registerOptions({ user }),
    });

    const { status: code } = response;

    if (code === 200) setAuthToken(response);

    const data = await response.json();
    return data;
  },

  // Function for user login request to the server
  login: async (user) => {
    const response = await fetch(`${baseURL}/login`, {
      ...loginOptions({ user }),
    });

    console.log(user);

    const { status: code } = response;

    if (code === 200) setAuthToken(response);

    const data = await response.json();
    return data;
  },

  // Function for user logout and token revocation request to the server
  logout: async () => {
    const response = await fetch(`${baseURL}/logout`, {
      ...logoutOptions(),
    });

    const { status: code } = response;

    // If logout successfull then remove token from storage, show message and empty the user object
    if (code === 200) {
      unsetAuthToken();
      const data = await response.json();
      return {
        user: {},
        status: 'successful',
        message: data.message,
      };
    }

    // If session has expired, remove token from storage and display a message
    if (code === 500) {
      unsetAuthToken();
      return {
        user: {},
        status: 'Unauthorized, You must Login or Register',
        message: 'Session for User has expired',
      };
    }

    return null;
  },

  // Function for fetching authenticated user details from the server
  fetchAuthUser: async () => {
    const response = await fetch(`${baseURL}/users`, {
      headers: { Authorization: localStorage.getItem('token') },
    });

    const { status: code } = response;

    // If token is missing or invalid, remove token and display error message
    if (code === 401) {
      unsetAuthToken();
      return {
        user: {},
        status: 'expired',
        error: 'Unauthorized, You must Login or Register',
        message: 'Session for User has expired',
      };
    }

    // If token is valid, return user data and message.
    if (code === 200) {
      const currentUser = await response.json();
      return {
        user: currentUser,
        status: 'successfull',
        error: null,
        message: 'User is authenticated',
      };
    }
    return null;
  },

};

// Export the api object for use in other files/modules
export default api;
