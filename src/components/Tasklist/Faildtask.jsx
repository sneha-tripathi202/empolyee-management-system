import React from 'react'

const Faildtask = ({data}) => {
  return (
    <div>
  <div className='h-full shrink-0 w-75 p-5 bg-green-400 rounded-xl items-center '>
       <div className='flex justify-between'> <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
        </div><h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'> {data.description}</p>
      <div className='mt-4'>
        <button className='bg-green-500 rounded py-1 px-1 m-2 text-sm'>Failed</button>
    </div>
      </div>
    </div>
  )
}

export default Faildtask
