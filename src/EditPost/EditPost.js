// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import './Edit.css';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../API/api';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const EditPost = () => {
  const [postData, setPostData] = useState({
    postTitle: '',
    postbody: '',
    postMail: '',
    number: 0,
    locations: '',
    date: 'YYYY-MM-DD', // Assuming you meant 'date' instead of 'data'
  });

  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch the existing post data
    api.get(`/postss/${id}`)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'number' && value.length > 10) {
        alert("Number should be 10 digits")
      return;
    }

    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();

    // Update the post data
    api.put(`/postss/${id}`, postData)
      .then(() => {
        console.log("Worked!");
        history('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const titleOptions = ["Driver", "Mechanic", "CareTaker"];

  return (
    <>
       <Link to='/view'>  <FaArrowLeftLong className='back-arow' /></Link>
      <div className='edit-post-container'>
        <h2 className='edit-title'>Edit job</h2>
        
        <form className='edit-form' onSubmit={handleEdit}>
          <label htmlFor="postTitle">Service Available:</label>
          <select
            id="postTitle"
            value={postData.postTitle}
            onChange={handleInputChange}
            name="postTitle"
          >
            <option value="" disabled>Select a Service</option>
            {titleOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <label htmlFor="postbody">Body:</label>
          <textarea
            id="postbody"
            name="postbody"
            placeholder='Job description'
            value={postData.postbody}
            onChange={handleInputChange}
          ></textarea>

          <label htmlFor="postMail">Email:</label>
          <input
            type="email"
            id="postMail"
            name="postMail"
            placeholder='Enter Email'
            value={postData.postMail}
            onChange={handleInputChange}
          />

          <label htmlFor="locations">Location:</label>
          <input
            id="locations"
            type="text"
            placeholder='Location'
            required
            name="locations"
            value={postData.locations}
            onChange={handleInputChange}
          />

          <label htmlFor="time">Date:</label>
          <input
            id="time"
            type="datetime-local"
            placeholder='dd-mm-yyyy'
            value={postData.time}
            onChange={handleInputChange}
          />

          <label htmlFor="number">Number:</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder='Enter your Phone Number'
            value={postData.number}
            onChange={handleInputChange}
          />

          <button className='edit-submit-btn' type="submit">Update Job</button>
        </form>
      </div>
    </>
  );
};

export default EditPost;
