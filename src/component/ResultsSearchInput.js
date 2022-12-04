import React,{useState} from 'react'

export const ResultsSearchInput = ({onNewSearch}) => {

    const [query,setQuery] = useState('');
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        onNewSearch(query);
      }
    }
  return (
    <div className='flex justify-center items-center'>
        <input className='bg-gray-100 lg:h-12 lg:w-96 h-10   p-4 m-3 rounded' value={query} onChange={(text)=>setQuery(text.target.value)} onKeyDown={handleKeyDown} />
        <button className='m-4  bg-slate-600 lg:h-12 lg:w-96 h-10 pl-9 pr-9 text-white font-bold text-md lg:text-xl rounded' onClick={()=>onNewSearch(query)}>Search</button>
    </div>
  )
}
