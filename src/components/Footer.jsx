// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
// <div>
//     <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm border-border-b-4 border-solid border-gray-700'>
//       <div>
//         <img src={assets.logo} className='mb-5 w-32' alt="" />  
//         <p className='w-full md:w-2/3 text-gray-600'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem fugit eaque accusamus
//            qui dolorum tenetur consequuntur, quod sint officiis nulla, unde est error culpa debitis tempora blanditiis saepe quis!  
//         </p>
//       </div>

//       <div>
//         <p className='text-xl font-medium mb-5'>COMPANY</p>
//         <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Delivery</li>
//             <li>Privacy Policy</li>
//         </ul>
//       </div>

//       <div>
//         <p className='text-xl font-medium mb-5'>GET I TOUCH</p>
//         <ul className='text-gray-600'>  
//             <li>+212 640298482</li>
//             <li>issamboumanjel@shop.com</li>
//             <li>instgram</li>
//         </ul>
//       </div>

//     </div>

//     <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copyright 2024@  www.Issam.com - ALl right reserved</p>
//     </div>

// </div>


//   )
// }

// export default Footer

import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center sm:centre'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm w-full max-w-screen-lg'>
        <div className='text-center sm:text-left'>
          <img src={assets.logo} className='mb-5 w-32 mx-auto sm:mx-0' alt="" />
          <p className='w-full md:w-2/3 text-gray-600 mx-auto sm:mx-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem fugit eaque accusamus
            qui dolorum tenetur consequuntur, quod sint officiis nulla, unde est error culpa debitis tempora blanditiis saepe quis!
          </p>
        </div>

        <div className='text-center sm:text-left'>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='text-center sm:text-left'>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='text-gray-600'>
            <li>+212 640298482</li>
            <li>issamboumanjel@shop.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className='w-full max-w-screen-lg'>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2024@ www.Issam.com - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

