import React,{useState} from 'react'
import { useArticleAPI } from '../hooks/useArticleAPI'
import { useSummaryAPI } from '../hooks/useSummaryAPI'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const ResultsListCard = ({data,index}) => {

  const { data:dataAE,isLoading: isLoadingAE } = useArticleAPI(data)
  const { data:dataAS, isLoading: isLoadingAS} = useSummaryAPI(data)
  const [isOpen,setIsOpen] = useState(false);

  const snippetFormatting = (str) =>{
    if(isOpen){
      return str
    }
    if(str.length>100){
      let s = str.substring(0,160);
      s = s +' ...'
      return s;
    }
    else
      return str;
  }
  const summaryFormatting = (str) =>{
    let newSum = str?.replace('[...]','');
    return newSum
  }

  if(isLoadingAE){
    return(
      <div className={`flex flex-col p-3  bg-[#2D4263] flex-1 m-2 rounded lg:overflow-hidden h-52 `}>
        <div className='h-6 w-4/6 bg-[#191919] opacity-40 rounded animate-pulse'></div>
        <div className='h-3 w-1/3 bg-[#191919] mt-1 opacity-40 rounded animate-pulse'></div>
        <div className='h-5 w-full bg-[#191919] mt-6 opacity-40 rounded animate-pulse'></div>
        <div className='h-5 w-full bg-[#191919] mt-1 opacity-40 rounded animate-pulse'></div>
      </div>
    )
  }
  return (
    <div className={`flex flex-col  bg-[#2D4263] flex-1 m-2 rounded lg:overflow-hidden ${!isOpen && 'lg:h-52 h-52' } `}>
      <div className=' flex flex-row items-center justify-between ml-3 mr-3 mt-3'>
        <p className='text-[#EEEEEE] font-bold font-sans lg:text-xl text-lg w-9/12 text-ellipsis overflow-hidden whitespace-nowrap '>{dataAE?.article?.title}</p>
        <a href={data.link} target={'_blank'} className='text-[#EEEEEE] underline underline-offset-4 text-xs lg:text-sm hover:cursor-pointer'>Visit Article</a>
      </div>
      
      <p className='text-[#C84B31] font-medium text-sm ml-3 mr-3'>{dataAE?.article?.site_name}</p>
      <p className='text-[#EEEE] text-sm lg:text-base mt-3 ml-3 mr-3'>{dataAE?.article?.summary ? snippetFormatting(dataAE.article.summary) : snippetFormatting(data.snippet) }</p>
      {isOpen &&<p className='text-[#C84B31] font-medium text-xs lg:text-sm mt-2 ml-3 mr-3'>Summary</p>}
      {isOpen &&<p className='text-[#EEEE] text-sm lg:text-base mt-1 ml-3 mr-3'>{summaryFormatting(dataAS?.summary)}</p>}
      {dataAS?.summary &&<div className='flex justify-center m-2 h-full items-end hover:cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
        {!isOpen ? <KeyboardArrowDownIcon style={{fontSize:35,color:'#EEEEEE'}} />
        : <KeyboardArrowUpIcon style={{fontSize:35,color:'#EEEEEE'}} />}
      </div>}
    </div>
  )
}
// C84B31