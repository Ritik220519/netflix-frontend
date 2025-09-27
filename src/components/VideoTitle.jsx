import React from 'react'

const VideoTitle = ({overview , title}) => {
  return (
    <div className=' pl-8 w-screen aspect-video pt-[10%] px-24  text-white absolute bg-gradient-to-r from-black  '>
      <p className='text-4xl font-bold'>{title}</p>
      <p className='py-5 w-1/2 text-lg'>{overview}</p>

      <div className='py-5'>
        <button className='bg-gray-100 text-black font-bold text-xl  px-8 py-2 rounded-2xl'>▶️ Play</button>
         <button className='bg-gray-100 text-black font-bold text-xl mx-6 px-8 py-2 rounded-2xl'>ℹ️ More Info</button>
      </div>
      
      
    </div>
  )
}

export default VideoTitle
