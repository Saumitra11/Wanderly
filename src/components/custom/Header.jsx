import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='p-1 shadow-sm flex justify-between items-center px-5'>
      {/* <Link to="/"> */}
        <img 
          src="/logo.svg" 
          alt="Logo" 
          style={{ cursor: 'pointer' }} 
        />
      {/* </Link> */}
        <div>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Header
