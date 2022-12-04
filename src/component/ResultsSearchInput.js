import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const ResultsSearchInput = ({onNewSearch,userQuery}) => {

    const [query,setQuery] = useState(userQuery);
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        onNewSearch(query);
      }
    }
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-[#5a5a5a] lg:w-1/3 w-10/12 rounded flex justify-between items-center  p-3 m-5 '>
        <input className='bg-[#5a5a5a] w-11/12 placeholder-[#bebebe] text-[#fff7f7] font-sans outline-none ' placeholder='Search the web' value={query} onChange={(text)=>setQuery(text.target.value)} onKeyDown={handleKeyDown} />
        <SearchIcon style={{color:'#fff7f7',fontSize:30,cursor:'pointer'}} onClick={handleKeyDown} />
      </div>
        
    </div>
  )
}
