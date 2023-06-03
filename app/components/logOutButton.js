import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const CoolButton = ({ onClick }) => {
  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
      onClick={onClick}
    >
      <FaSignOutAlt className="mr-2" />
      <span className="text-xl">Logout</span>
    </button>
  );
};

export default CoolButton;
