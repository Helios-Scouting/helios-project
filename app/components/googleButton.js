import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleButton = ({ onClick }) => {
  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
      onClick={onClick} // Aquí agregamos el evento onClick
    >
      <FaGoogle className="mr-2" />
      <p className="text-xl">Log in with Google</p>
    </button>
  );
};

export default GoogleButton;
