import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHouse } from '../redux/house/addHouseSlice';

export default function AddHouse() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
      });
    
      const dispatch = useDispatch();
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleImageChange = (event) => {
        setFormData({ ...formData, image: event.target.files[0] });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const formDataWithHouse = {
            house: formData
          };
        //const myformdata = {house: {formData}}
        console.log(formDataWithHouse)

        dispatch(addHouse(formDataWithHouse));
      };
    
      return (
        <div>
            <h1>Add House Form</h1>
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
          <button type="submit">Submit</button>
        </form>
            
        </div>
    )






}