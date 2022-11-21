import React ,{useState}from 'react'
import { useGoogleSearchAPI } from './hooks/useGoogleSearchAPI';
import { useYoutubeSearchAPI } from './hooks/useYoutubeSearchAPI';
import { useRouter } from 'next/router';
import { useArticleAPI } from './hooks/useArticleAPI';
import { ArticleCard } from './component/ArticleCard';
import { data } from 'autoprefixer';

const Results = () => {

  const router = useRouter();
  const searchQuery = router.query.searchQuery;

  // const { refetch: refetchYT, data: dataYT, isLoading:isLoadingYT} = useYoutubeSearchAPI(searchQuery)
  const { refetch: refetchGS, data: dataGS, isLoading:isLoadingGS } = useGoogleSearchAPI(searchQuery)  
  
  return (
    <div>
      {
        dataGS?.items.map(item=><ArticleCard data={item} />)
      }
    </div>
  )
}

export default Results