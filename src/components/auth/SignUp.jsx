/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { NavLink, useNavigate } from 'react-router-dom';
import { userRegister } from '../../redux/auth/registerSlice';
import logo from '../../images/logo/logo.png';

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpError, setSignUpError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [values, setValues] = useState({});

  const onSubmit = async (data) => {
    const userData = { user: { email: data.email, password: data.password } };
    try {
      await dispatch(userRegister(userData));
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setSignUpError('user already exists');
      } else {
        setSignUpError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 mt-32 bg-gray-100 pt-10 pb-10 pl-5 pr-5 rounded-md shadow-md">
        <div className="w-auto ">
          <img
            className="mx-auto h-40 w-auto mb-6"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-0 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up to get started
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                {...register('name', { required: true })}
                className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-focus-color sm:text-sm sm:leading-6 mb-6 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="User name"
              />
              {errors.name && (
              <small className="text-danger">Name is required</small>
              )}
            </div>

            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                name="email"
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus-color sm:text-sm sm:leading-6 mb-6 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="Email address"
              />
              {errors.email && (
              <small className="text-danger">Invalid email address</small>
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
                {...register('password', { required: true })}
                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus-color sm:text-sm sm:leading-6 mb-6 ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder="Password"
              />
              {errors.password && (
              <small className="text-danger">Password is required</small>
              )}
            </div>
          </div>

          <div className="text-red-500">
            {signUpError && <div>{signUpError}</div>}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <NavLink
                to="/login"
                className="font-medium text-button-color hover:text-button-hover-color"
              >
                Already have an account?
              </NavLink>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-button-color hover:bg-button-hover-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-icon-color group-hover:text-icon-hover-color"
                  aria-hidden="true"
                />
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
