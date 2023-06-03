import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { userAuth } from '../context/AuthContext';

const CoolButton = () => {
  const { logOut } = userAuth();
  
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
      onClick={handleSignOut}
    >
      <FaSignOutAlt className="mr-2" />
      <span className="text-xl">Logout</span>
    </button>
  );
};

export default CoolButton;
