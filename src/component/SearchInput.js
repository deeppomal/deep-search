import React,{useState} from 'react'
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';

export const SearchInput = () => {

  const router = useRouter();
  const [query,setQuery] = useState('');

  const handleBtn = () => {
    if(query){
      router.push({
        pathname: '/results',
        query:{searchQuery:query}
      })
    }
    
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleBtn()
    }
  }

  return (
    <div className='flex w-full justify-center drop-shadow-2xl'>
        {/* <input className='bg-gray-100 h-12 w-96 p-4' value={query} onChange={(text)=>setQuery(text.target.value)} onKeyDown={handleKeyDown} />
        <button className='mt-10 w-96 bg-slate-600 h-12 text-white font-bold text-xl' onClick={handleBtn}>Search</button> */}
        <div className='bg-[#5a5a5a] lg:w-1/3 w-10/12 rounded flex justify-between items-center  p-3 m-5 '>
          <input className='bg-[#5a5a5a] w-11/12 placeholder-[#bebebe] text-[#fff7f7] font-sans outline-none ' placeholder='Search the web' value={query} onChange={(text)=>setQuery(text.target.value)} onKeyDown={handleKeyDown} />
          <SearchIcon style={{color:'#fff7f7',fontSize:30,cursor:'pointer'}} onClick={handleBtn} />
        </div>
    </div>
  )
}
