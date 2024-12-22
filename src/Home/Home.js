import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaCirclePlus, FaPen, FaTrash } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import api from '../API/api';
import Loader from '../Loader/Loader';

const Home = ({ setPosts, setLoading, handleDelete, loading, error, userId,posts }) => {
  useEffect(() => {
 
    const fetchData = async () => {
      try {
        const response = await api.get(`/posts?userId=${userId}`);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setPosts, setLoading, userId]);

  return (
    <>
   
   
      {loading ? (
       <Loader/>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
        <Link to='/view'>  <FaArrowLeftLong className='back-arrow' /></Link>
          <div className="pic">
            
          <h2 className='all-tag'><span>H</span>ere You can Upload your Job</h2>
            <h2 className='all-tag'><span>W</span>e're here to help you upload your job</h2>
        
          </div>
    
        <div className="post-list">
          {posts.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>User name</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Location</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post._id}>
                    <td>{post.names}</td>
                    <td>{post.postTitle}</td>
                    <td>{post.postbody}</td>
                    <td>{post.locations}</td>
                    <td>{post.postMail}</td>
                    <td>{post.number}</td>
                    <td>{post.time}</td>
                    <td>
                      <Link to={`/edit/${post._id}`}>
                        <button className='edit'><FaPen /></button>
                      </Link>
                      <button className='del' onClick={() => handleDelete(post._id)}><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className='no-item-container'>
              <p className='no_item'>No items found</p>
            </div>
          )}
        </div>
         <div className="add">
         <Link to='/Add'>
                 <FaCirclePlus />
         </Link>
       </div>
     </div>
      )}

     
    </>
  );
};

export default Home;
