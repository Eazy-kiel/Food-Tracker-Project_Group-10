import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import HouseImage from '../assets/icons/leaf-logo.png';
import FormInput from '../components/FormInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://freshtrackapi.onrender.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }
  
      alert(data.message);
      sessionStorage.setItem('currentUser', JSON.stringify(data.user));
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };
  

  return (
    <div className='w-screen h-screen flex '>
      <div className='w-1/2 h-full bg-[url("https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] flex justify-center items-center bg-no-repeat bg-center bg-cover'>
        
      </div>

      <div className='w-1/2 h-full flex  items-center'>
      <div className='w-screen h-screen flex flex-col justify-center items-center py-20'>
      <div className='flex flex-col gap-3 rounded-md p-8 shadow-lg w-[300px]'>
        <img src={HouseImage} alt='leaf logo' className='block mx-auto w-7 h-6' />
        <p className=' text-lg text-center font-bold'>Register</p>

        <label htmlFor='email'>Username</label>
        <FormInput
          id='username'
          type='text'
          value={username}
          autoComplete='username'
          placeholder='Enter your Username'
          onChange={e => setUsername(e.target.value)}
        />

        <label htmlFor='email'>Email</label>
        <FormInput
          id='email'
          type='email'
          value={email}
          autoComplete='username'
          placeholder='Enter your email'
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor='password'>Password</label>
        <FormInput
          id='password'
          type='password'
          value={password}
          placeholder='Enter your password'
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className='h-8 w-full text-white text-sm bg-green-500 rounded-md'>
          Register
        </button>

        <p className='text-gray-500 text-sm mx-auto'>
          Have an account?&nbsp;
          <Link to='/Login' className='text-green-400'>
           Login
          </Link>
        </p>
      </div>
    </div></div>
    </div>
  );
};

export default Login;










