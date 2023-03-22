/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { NavLink, useNavigate } from 'react-router-dom';
import { signin } from '../../redux/auth/authSlice';
import useToken from '../../redux/auth/useToken';

export default function Login() {
  const [user, setUser] = useState({});
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const status = useSelector(allStatus);
  // const message = useSelector(allMessages);

  const dispatch = useDispatch();
  const isTokenSet = useToken();
  const navigate = useNavigate();

  const handlechange = (e) => {
    const {
      target: { name: input, value },
    } = e;
    setUser({ ...user, [input]: value });

    // Reset username error when input is changed
    if (input === 'email') setUsernameError('');
    // Reset password error when input is changed
    if (input === 'password') setPasswordError('');
  };

  // const handleSignIn = () => dispatch(signin(user));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields before dispatching signin action
    if (!user.email) setUsernameError('Email is required');
    if (!user.password) setPasswordError('Password is required');
    if (user.email && user.password) dispatch(signin(user));
  };

  useEffect(() => {
    if (isTokenSet) navigate('/');
  }, [isTokenSet]);

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 mt-32">
        <div className="w-auto ">
          {/* <img
            className="mx-auto h-40 w-auto mb-6"
            src={logo}
            alt="Your Company"
          /> */}
          <h2 className="mt-0 text-center text-3xl font-bold tracking-tight text-gray-900">
            Login to get started
          </h2>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">

            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handlechange}
                required
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus-color sm:text-sm sm:leading-6 mb-6"
                placeholder="Email address"
              />
              {usernameError && (
                <small className="text-danger">{usernameError}</small>
              )}
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={handlechange}
                required
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus-color sm:text-sm sm:leading-6 mb-6"
                placeholder="Password"
              />
              {passwordError && (
                <small className="text-danger">{passwordError}</small>
              )}
            </div>

          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-button-color focus:ring-focus-color"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <div className="font-medium text-button-color hover:text-button-hover-color">
                Forgot your password?
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-button-color py-2 px-3 text-sm font-semibold text-white hover:bg-button-hover-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:ring-focus-color"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-icon-color group-hover:text-icon-hover-color" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <div className="font-medium text-button-color hover:text-button-hover-color">
              <NavLink to="/Signup"> Don't have an account? Signup   </NavLink>

            </div>
          </p>
        </form>
      </div>
    </div>
  );
}
