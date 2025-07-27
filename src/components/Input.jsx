import React from "react";

const Input = () => {
  return (
    <input
      type='text'
      className='w-full h-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      placeholder='Type your message here...'
    />
  );
};

export default Input;
