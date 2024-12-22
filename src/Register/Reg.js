import React, { useState } from 'react';
import './reg.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../API/api';
import { Link, useNavigate } from 'react-router-dom';

const Reg = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp,setOTP]=useState('')
  const [name, setName] = useState('')
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const history = useNavigate()

  const handleGenerateOTP = async () => {
    try {
      if (!email) {
        console.log('Please enter your email to generate OTP.');
        return;
      }

      setOtpGenerated(true);
      const response = await api.post('/Auth/reg/generate', { email });
      toast.success("OTP Sent to Email");
      console.log(response.data.message);
    } catch (error) {
      console.error('Error frontend generating OTP:', error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await api.post('/Auth/reg/verify-otp', { email, otp });
      toast.success("OTP Verified");
      console.log(response.data.message);
      setIsVerified(true);
    } catch (error) {
      toast.error("OTP Not Verify");
      console.error('Error frontend verifying OTP:', error);
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSign = async (e) => {
    e.preventDefault();
    

    
    try {
        if(isVerified){
      await api.post('/Auth/reg', { name, email, password });
      history('/');
        }
    }

    catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="center-container">
        <ToastContainer />
        <div className="register-containers">
          <h2 className='registers_title'>Register</h2>
          <form onSubmit={handleSign} id='registerForm'>
            <div className="form-groups">
              <label className='Names' htmlFor='name'>Name:</label>
              <input
                type="text"
                className='nametext'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-groups">
              <label className='email' htmlFor='email'>Email:</label>
              <input
                type="email"
                className='emailtext'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="button" className='generate-otp' onClick={handleGenerateOTP}>
              Generate OTP
            </button>
            {otpGenerated && (
              <>
                <div className="form-groups">
                  <label className='otp' htmlFor='otp'>Enter OTP:</label>
                  <input
                    type="text"
                    className='emailtext'
                    onChange={(e) => setOTP(e.target.value)}
                    required
                  />
                </div>
                <button type="button" className='verify-otp' onClick={handleVerifyOTP}>
                  Verify OTP
                </button>
              </>
            )}
            <div className="form-groups">
              <label className='pwd' htmlFor='pwd'>Create Password:</label>
              <input
                type="password"
                className='pwdtext'
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className='submit' disabled={!isVerified}>
              Register
            </button>
          </form><br></br>
          <Link to='/' className='for'>I Already have an Account</Link>
         
        </div>
      </div>
    </>
  )
}

export default Reg;