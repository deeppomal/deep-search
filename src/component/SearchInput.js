import React,{useState} from 'react'
import { useRouter } from 'next/router';

export const SearchInput = () => {

  const router = useRouter();
  const [query,setQuery] = useState('Testing');

  const handleBtn = () => {
    if(query){
      router.push({
        pathname: '/results',
        query:{searchQuery:query}
      })
    }
    
  }

  return (
    <div className='flex flex-col'>
        <input className='bg-gray-100 h-12 w-96 p-4' value={query} onChange={(text)=>setQuery(text.target.value)} />
        <button className='mt-10 w-96 bg-slate-600 h-12 text-white font-bold text-xl' onClick={handleBtn}>Search</button>
    </div>
  )
}