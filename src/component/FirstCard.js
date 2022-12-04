import React from 'react'
import { useArticleAPI } from '../hooks/useArticleAPI'
import {useSummaryAPI} from '../hooks/useSummaryAPI';

export const FirstCard = ({data}) => {

  const { data:dataAE, } = useArticleAPI(data)
  // const { data:dataAS} = useSummaryAPI(data)

  return (
    <div className='mt-2 flex items-center justify-center flex-col'>
        <div className='lg:w-1/2 w-11/12'>
          <img src={dataAE?.article?.image} className='h-[200px] lg:h-[400px] w-full' />
        </div>
        <div className='lg:w-2/3 w-10/12 flex lg:justify-end justify-center'>
          <div className='lg:w-2/3 bg-[#1a1818] lg:-mt-20 -mt-20 rounded p-5 flex flex-col'>
            <p className='text-[#e6e6e6] font-extrabold text-lg lg:text-xl'>{dataAE?.article?.title}</p>
            <p className='text-[#eddd02] font-bold text-sm lg:text-md mt-2'>By {dataAE?.article?.site_name}</p>
            <p className='text-[#f5f5f5] mt-2 font-light lg:font-medium overflow-hidden'>{dataAE?.article?.summary ? dataAE?.article?.summary : data?.snippet}</p>
          </div>
        </div>
    </div>
  )
}
