/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHouse } from '../redux/house/addHouseSlice';
import NavBar from './navBar/NavBar';

 const AddHouse = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  const [formErrors, setFormErrors] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
  });

  const validateFormData = () => {
    const errors = {};

    // Validate title
    if (!formData.title) {
      errors.title = 'Title is required';
    }

    // Validate description
    if (!formData.description) {
      errors.description = 'Description is required';
    } else if (formData.description.length < 25) {
      errors.description = 'Description must not be less than 25 characters';
    }

    // Validate price
    if (!formData.price) {
      errors.price = 'Price is required';
    } else if (isNaN(formData.price)) {
      errors.price = 'Price must be a number';
    }

    if (!formData.image) {
      errors.image = 'image is required';
    }

    setFormErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    if (validateFormData()) {
      const formDataWithHouse = {
        house: formData,
      };
      dispatch(addHouse(formDataWithHouse))
        .then(() => {
        // Clear form data and errors
          setFormData({
            title: '',
            description: '',
            price: '',
            image: null,
          });
          setFormErrors({
            title: '',
            description: '',
            price: '',
            image: null,
          });
          // Show success message
          setSuccessMessage('House added successfully!');
          setTimeout(() => setSuccessMessage(''), 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Add House Form</h1>
        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 text-center">
            <p className="font-bold">{successMessage}</p>
          </div>
        )}
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title:
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
            {formErrors.title && (
              <div className="text-red-500 text-sm">{formErrors.title}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description:
            </label>
            <textarea
              className="w-full p-2 border rounded-md"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            {formErrors.description && (
              <div className="text-red-500 text-sm">{formErrors.description}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
              Price:
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
            {formErrors.price && (
            <div className="text-red-500 text-sm">{formErrors.price}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
              Image:
            </label>
            <input
              className="p-2 border rounded-md"
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            {formErrors.image && (
            <div className="text-red-500 text-sm">{formErrors.image}</div>
            )}
          </div>
          <button
            className="bg-button-color hover:bg-button-hover-color text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default AddHouse;