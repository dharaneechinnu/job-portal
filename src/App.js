import React, {      useState } from 'react';
import './Login/log.css';
import Log from './Login/Log';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import Reg from './Register/Reg';
import Api from './API/api'
import Home from './Home/Home';
import CreatePost from './CreatePost/CreatePost';
import EditPost from './EditPost/EditPost';
import AllPost from './Allpost/AllPost';
import { toast } from 'react-toastify';
import Cont from './contact/Cont';
import View from './Home/View';
import About from './Home/About';
import api from './API/api';
import Footer from './Home/Footer';

function App() {
  
  const [postTitle,setPostTitle]= useState('')
  const [postMail,setMail] = useState('')
  const [number,setnumber]= useState('');
  const [postbody,setPostBody] = useState('')
  const [name,setname] =useState('')
  const [names,setnames] =useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const [time,settime]= useState('')
  const [search, setSearch] = useState('');

  const[locations,setlocations] = useState('')
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const history = useNavigate()
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/Auth/login', { email, password });
      const { userId, role, accessToken } = response.data;

      if (role === 'User') {
        console.log(response.data);
        console.log('User ID:', userId);

        setUserId(userId)
        localStorage.setItem('userId', userId); 
        localStorage.setItem('accessToken', accessToken);

        if (response.status === 200) {
          console.log('Success-login');

          if (role === 'User') {
            history('/view');
          }
        }
      } else {
        history('/Register');
        alert('Register again with another email');
      }
    } catch (error) {
      toast.error('Email or password wrong!');
      console.error('Error in API call:', error);
    }
  };
  

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
    
      setUserName(userName);
  
      await Api.post('/add', {
        userId,
        names,
        time,
        postMail,
        postTitle,
        postbody,
        locations,
        number,
      })
        .then((adds) => {
          console.log(adds);
         
          history('/home');
        })
        .catch((error) => console.error('Error adding post:', error));
    } catch (error) {
      console.error('Error in handleAdd:', error);
    }
  };
  // const filteredPosts = posts.filter((post) => {
  //   const searchText = search.toLowerCase();
  //   return (
  //     post.postTitle.toLowerCase().includes(searchText) ||
  //     post.postbody.toLowerCase().includes(searchText) ||
  //     post.postMail.toLowerCase().includes(searchText) ||
  //     String(post.number).includes(searchText)
  //   );
  // });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };  


  

  const handleDelete =async (postId) => {
   await Api.delete(`/posts/${postId}`)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };
  
  return (
    <>
   
      <Routes>
   <Route
  path='/'
  element={
    <Log
    
   
    
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      setEmail={setEmail}
    />
  }
/>
    <Route path='/register' element={<Reg
    name={name}
    setname={setname}

     email={email}
     setEmail={setEmail}
     setPassword={setPassword}
     password={password}
    />}/>
   <Route path='/home' element={<Home
   search={search}
   handleSearchChange={handleSearchChange}
   handleDelete={handleDelete}
   posts={posts}
   loading={loading}
   error={error}
   setError={setError}
   setLoading={setLoading}   
   setPosts={setPosts}
    userName={userName}
    userId={userId}
    email={email}
   />}/>
   <Route path='/Job' element={<AllPost userName={userName}/>} />
   <Route path='/Add' element={<CreatePost
    handleAdd={handleAdd}
    setPostBody={setPostBody}  
    setMail={setMail}
    setnumber={setnumber}
    setPostTitle={setPostTitle}
    postMail={postMail}
    postTitle={postTitle}
    number={number}
    postbody={postbody}
    names={names}
    setnames={setnames}
    time={time}
    settime={settime}
    userid={userId}
    setUserId={setUserId}
    locations={locations}
    setlocations={setlocations}
    />}/>
    <Route path="/edit/:id" element={<EditPost/>}/>
 
    <Route path='/contact' element={<Cont userName={userName}/>}/>
    <Route path='/view' element={<View/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Footer' element={<Footer/>}/>
   </Routes>
    </>
  );
}

export default App;
