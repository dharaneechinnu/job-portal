import React from 'react';
import './create.css';

const CreatePost = ({ time, settime, handleAdd, postMail, postTitle, setPostTitle, setPostBody,locations,setlocations, setMail, number, setnumber, postbody, setnames, names }) => {
  // Sample options for postTitle, you can replace it with your actual options
  const titleOptions = ["Driver", "Mechanic", "CareTaker","Teacher"];
  const showAlert = (message) => {
    alert(message);
  };

  const handleNumberChange = (e) => {
    const newNumber = e.target.value;
    if (newNumber.length <= 10) {
      setnumber(newNumber);
    } else {
      showAlert('Phone number should be exactly 10 digits!');
    }
  };
  return (
    <>
    
      <main className="NewPost">
        <h2>New Post</h2>
        <form className="newPostForm" onSubmit={handleAdd}>
          <label htmlFor="Name">Name:</label>
          <input
            id="Name"
            type="text"
            placeholder='Username'
            required
            value={names}
            onChange={(e) => setnames(e.target.value)}
          />
          <label htmlFor="postTitle">Serive Avaliable:</label>
          <select
            id="postTitle"
            required
            placeholder="Select Services"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          >
            <option value="" disabled>Select a Services</option>
            {titleOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <label htmlFor="postMail">Email:</label>
          <input
            id="postMail"
            type="email"
            placeholder='Enter You Email'
            required
            value={postMail}
            onChange={(e) => setMail(e.target.value)}
          />
         <label htmlFor="PostNumber">Phone Number:</label>
          <input
            id="PostNumber"
            type="number"
            placeholder='Ex:123456789'
            required
            value={number}
            onChange={handleNumberChange}
          />
           <label htmlFor="PostNumber">Location:</label>
          <input
            id="PostNumber"
            type="text"
            placeholder='Location'
            required
            value={locations}
            onChange={(e) => setlocations(e.target.value)}
          />
          <label htmlFor="PostNumber">Today Date:</label>
          <input
            id="PostNumber"
            type="datetime-local"
            placeholder='Posting current data'
            required
            value={time}
            onChange={(e) => settime(e.target.value)}
          />
          <label htmlFor='postBody'>Description:</label>
          <textarea
            id="postbody"
            placeholder='Job Description'
            required
            value={postbody}
            onChange={(e) => setPostBody(e.target.value)}
          />
          <button type="submit" className='submitbtns'>Submit</button>
        </form>
      </main>
    </>
  );
};

export default CreatePost;
