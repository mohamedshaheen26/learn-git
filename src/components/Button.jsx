import React from "react";

const Button = () => {
  return (
    <button
      className='w-full h-10 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
      type='submit'
    >
      Submit
    </button>
  );
};

export default Button;
