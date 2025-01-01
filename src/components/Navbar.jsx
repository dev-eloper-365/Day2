import React from 'react';

export const Navbar = () => {
  return (
    <div className="h-[60px] bg-white my-4 rounded-lg flex items-center text-xl font-medium gap-2 justify-center">
      <img
        src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
        alt="Firebase Logo" className='w-10 h-10'
      />
      <h1>FireBase Contact App</h1>
    </div>
  );
};
