import React from 'react'

export const FirstCard = ({data,sum}) => {
  console.log('sum',sum)
  return (
    <div className='mt-4 flex items-center justify-center flex-col'>
        <div className='w-3/5'>
          <img src={data?.article?.image} className='h-[500px] w-full' />
        </div>
        <div className='w-3/4 flex justify-end'>
          <div className='h-80 w-1/2 bg-[#1a1818] -mt-36 rounded p-7 flex flex-col'>
            <p className='text-white'>{data?.article?.title}</p>
            <p className='text-white'>{data?.article?.site_name}</p>
            <p className='text-white'>{sum?.summary}</p>
          </div>
        </div>
       
    </div>
  )
}
