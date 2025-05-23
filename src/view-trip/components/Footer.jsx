import React from 'react';
import { FaCopyright } from "react-icons/fa6";

function Footer({ trip }) {
  return (
    <div className='my-7 py-4'>
      <h2 className='text-center text-sm font-light hover:text-yellow-400 transition-all'>
        &copy; Saumitra Pathak
      </h2>
    </div>
  );
}

export default Footer;
