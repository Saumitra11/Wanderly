import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SelectTravelersList, SelectBudgetOptions, AI_PROMPT} from '@/constants/options'
import React, { useEffect, useReducer, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { toast } from 'sonner';

function CreateTrip() {
  const [place, setPlace] = useState()
  const [formData, setFormData] = useState([])

  const handleInputChange = (name, value)=>{
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => { // If we use useEffect with empty dependency array, then it will run only once on mount, if we use it without dependency array, it will run on every render
    console.log(formData);
  }, [formData])

  const onGenerateTrip = ()=>{
    if(formData?.days>7){
      toast("Number of Days should be less than 7!")
      return;
    }
    if(formData?.days<1){
      toast("Enter Valid number of days!")
      return;
    }
    if(!formData?.location || !formData?.budget || !formData?.people || !formData?.days){
      toast("Please fill all the details!")
      return;   
    }
    console.log(formData)
  }
  return (
    <div className='sm:px-10 md:px-32 lg:px-50 xl:px-24 px-5 mt-10'>
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
                onChange:(v)=>{
                  setPlace(v);
                  handleInputChange('location', v) 
                }
              }
            }
          />
        </div>

        {/* To Choose Number of Days */}
        <div>
          <h2 className='text-xl my-3 font-medium '>How Long Will Your Next Adventure Be?</h2>
          <Input 
            placeholder={"Eg. 5 (in days)"} 
            type="number"
            onChange={
              (e) => handleInputChange('days', e.target.value)
            }
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* To Choose Budget  */}
        <div>
          <h2 className='text-xl my-3 font-medium '>What’s Your Adventure Budget?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item, index) => (
              <div 
                key={index} 
                className={
                  `p-4 border rounded-lg cursor-pointer hover:shadow-lg
                  ${formData?.budget==item.title && 'shadow-lg border-black'}`
                }
                onClick={()=>handleInputChange('budget', item.title)}
              >
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
              <div 
                key={index} 
                className={
                  `p-4 border rounded-lg cursor-pointer hover:shadow-lg
                  ${formData?.people==item.people && 'shadow-lg border-black'}`
                }
                onClick={()=>handleInputChange('people', item.people)}
              >
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='my-10 justify-end flex'>
        <Button onClick={onGenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  )
}

export default CreateTrip