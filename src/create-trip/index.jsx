import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SelectTravelersList, SelectBudgetOptions, AI_PROMPT} from '@/constants/options'
import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function CreateTrip() {
  const [place, setPlace] = useState()
  const [formData, setFormData] = useState([])

  return (
    <div className='sm:px-10 md:px-32 lg:px-50 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Help Us Curate Your Ideal Adventure 🏖️🏝️</h2>
      <p className='mt-3 text-gray-500 text-xl'>Simply share a few details, and our trip planner will craft a personalized itinerary tailored to your preferences.</p>
    
      <div className='mt-20 flex flex-col gap-10'>
        {/* To Choose Location  */}
        <div>
          <h2 className='text-xl my-3 font-medium '>Where's your next adventure taking you?</h2>
          <GooglePlacesAutocomplete 
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={
              // To Save Value to useState
              {
                place,
                onChange:(v)=>{setPlace(v); console.log(v)}
              }
            }
          />
        </div>

        {/* To Choose Number of Days */}
        <div>
          <h2 className='text-xl my-3 font-medium '>How Long Will Your Next Adventure Be?</h2>
          <Input placeholder={"Eg. 5 (in days)"} type="number"/>
        </div>

        {/* To Choose Budget  */}
        <div>
          <h2 className='text-xl my-3 font-medium '>What’s Your Adventure Budget?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item, index) => (
              <div key={index} className='p-4 border rounded-lg cursor-pointer hover:shadow-lg'>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* To Choose Number of People  */}
        <div>
          <h2 className='text-xl my-3 font-medium '>Who will your next adventure be with?</h2>
          <div className='grid grid-cols-2 gap-5 mt-5'>
            {SelectTravelersList.map((item, index) => (
              <div key={index} className='p-4 border rounded-lg cursor-pointer hover:shadow-lg'>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='my-20 justify-end flex'>
        <Button>Generate Trip</Button>
      </div>
    </div>
  )
}

export default CreateTrip