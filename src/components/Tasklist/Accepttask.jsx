import React from 'react'

const Accepttask = () => {
  return (
    <div>
       <div className='h-full shrink-0 w-75 p-5 bg-yellow-400 rounded-xl items-center '>
       <div className='flex justify-between'> <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'> 20 feb 2024</h4>
        </div><h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
      <p className='text-sm mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis dignissimos earum iste voluptates asperiores.</p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>mark as Completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>mark as Failed</button>
      </div>
      </div>
      
    </div>
  )
}

export default Accepttask
