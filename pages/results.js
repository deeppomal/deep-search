import React ,{useState}from 'react'
import { useGoogleSearchAPI } from './hooks/useGoogleSearchAPI';
import { useYoutubeSearchAPI } from './hooks/useYoutubeSearchAPI';
import { useRouter } from 'next/router';
import { useArticleAPI } from './hooks/useArticleAPI';
import { ArticleCard } from './component/ArticleCard';
import { data } from 'autoprefixer';
import dataGoogle from './dataGoogle';
import dataYoutube from './dataYoutube';



const Results = () => {

  const router = useRouter();
  const searchQuery = router.query.searchQuery;

  // const { refetch: refetchYT, data: dataYT, isLoading:isLoadingYT} = useYoutubeSearchAPI(searchQuery)
  // const { refetch: refetchGS, data: dataGS, isLoading:isLoadingGS } = useGoogleSearchAPI(searchQuery)  
  const dataGS = JSON.parse(dataGoogle);
  const dataYT = JSON.parse(dataYoutube);

  return (
    <div>
      {
        dataGS?.items?.slice(0,1)?.map(item=><ArticleCard data={item} key={item.cacheTime} />)
      }
    </div>
  )
}

export default Results