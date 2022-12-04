import React from 'react'
import YouTube from 'react-youtube';

export const YoutubeListCard = ({data}) => {
    const opts = {
        height: '240',
        width:'100%',
        playerVars: {
          autoplay: 0,
        },
    };
  return (
    <div className='m-2 flex-1'>
        <YouTube videoId={data?.id?.videoId} opts={opts}  />
    </div>
  )
}
