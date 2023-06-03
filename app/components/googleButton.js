import React, { use, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { userAuth } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';


const GoogleButton = () => {
  const { googleSignIn, user } = userAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
      onClick={handleGoogleSignIn} // Aquí agregamos el evento onClick
    >
      <FaGoogle className="mr-2" />
      <p className="text-xl">Log in with Google</p>
    </button>
  );
};

export default GoogleButton;


