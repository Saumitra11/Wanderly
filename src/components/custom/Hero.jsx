import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-20 gap-9'>
        <h1 className='font-extrabold text-[50px] text-center mt-16'><span>Search, Plan, and Wander</span> — Your Perfect Trip Awaits.</h1>
        <p className='text-xl text-gray-500 text-center'>With Wanderly, AI takes the guesswork out of travel. Get personalized itineraries tailored to your preferences, so you can focus on the adventure. Let us plan your next journey, seamlessly and smartly.</p>
        <Link to='/create-trip'>
          <Button>Get Started Today—No Fees, Just Fun!</Button>
        </Link>
    </div>
  )
}

export default Hero