import React,{useState} from 'react'
import { useGoogleSearchAPI } from '../hooks/useGoogleSearchAPI';
import { useYoutubeSearchAPI } from '../hooks/useYoutubeSearchAPI';

export const SearchInput = () => {

  const [query,setQuery] = useState('');
  const { refetch: refetchYT, data: dataYT } = useYoutubeSearchAPI(query)
  const { refetch: refetchGS, data: dataGS } = useGoogleSearchAPI(query)
  const handleBtn = () => {
    refetchYT();
    refetchGS();
    setQuery('');   
  }

  return (
    <div className='flex flex-col'>
        <input className='bg-gray-100 h-12 w-96 p-4' value={query} onChange={(text)=>setQuery(text.target.value)} />
        <button className='mt-10 w-96 bg-slate-600 h-12 text-white font-bold text-xl' onClick={handleBtn}>Search</button>
    </div>
  )
}
