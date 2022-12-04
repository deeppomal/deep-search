import React from 'react'
import { ResultsListCard } from './ResultsListCard'

export const ResultsList = ({data}) => {
    
  return (
    <div className='flex justify-center '>
        <div className='flex lg:flex-row flex-col w-4/5'>
            {
                data?.items.slice(0,3).map(item =>{
                    return(
                        <ResultsListCard data={item} key={item.cacheId}/>
                    )
                })
            }

        </div>
    </div>
  )
}
