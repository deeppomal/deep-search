import React from 'react'
import { YoutubeListCard } from './YoutubeListCard'

export const YoutubeList = ({data}) => {
  return (
    <div className='flex items-center justify-center mt-8 pb-20'>
        <div className='flex lg:flex-row flex-col  w-10/12 lg:w-4/5'>
        {
            data?.items.slice(0,3).map(item => {
                return(
                    <YoutubeListCard data={item} key={item?.id?.videoId} />
                )
            })
        }
        </div>
    </div>
  )
}
