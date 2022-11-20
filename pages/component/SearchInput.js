import React from 'react'

export const SearchInput = () => {
  return (
    <div className='flex flex-col'>
        <input className='bg-gray-100 h-12 w-96 p-4' />
        <button className='mt-10 w-96 bg-slate-600 h-12 text-white font-bold text-xl'>Search</button>
    </div>
  )
}
