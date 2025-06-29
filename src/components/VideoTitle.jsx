import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold '>{title}</h1>
        <p className='py-6 text-sm w-1/2'>{overview}</p>
        <div>
            <button className='bg-white/100 text-black p-2 px-12 text-lg rounded-lg bg-opacity-100 hover:bg-white/50'> Play</button>
            <button className='mx-2 bg-gray-500 text-white p-2 px-12 text-lg bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle