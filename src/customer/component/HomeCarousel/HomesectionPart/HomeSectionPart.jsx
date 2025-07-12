import React from 'react'

const HomeSectionPart = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xl overflow-hidden w-full border-4-black mt-3'>
       <div className='h-[13rem] w-[10rem]'>
          <img className='object-cover object-top w-full h-full mt-2' src="https://rukminim2.flixcart.com/image/240/240/xif0q/dress/8/x/u/l-aa-0171white-pink-floral-yoke-dress-aayu-original-imaggd2hszpruetz.jpeg?q=60" alt="" />
       </div>
       <div className='p-3'>
         
          <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
          <p className='mt-2 text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
       </div>
    </div> 
  )
}

export default HomeSectionPart
