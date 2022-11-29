import React,{useState} from 'react'

export const ResultsSearchInput = () => {

    const [query,setQuery] = useState('Testing');

    const handleBtn = () => {
        
    }
  return (
    <div className='flex justify-center'>
        <input className='bg-gray-100 h-12 w-96 p-4 m-4' value={query} onChange={(text)=>setQuery(text.target.value)} />
        <button className='m-4 w-96 bg-slate-600 h-12 text-white font-bold text-xl' onClick={handleBtn}>Search</button>
    </div>
  )
}
