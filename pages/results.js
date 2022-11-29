import React ,{useState}from 'react'
import { useGoogleSearchAPI } from '../src/hooks/useGoogleSearchAPI';
import { useYoutubeSearchAPI } from '../src/hooks/useYoutubeSearchAPI';
import { useRouter } from 'next/router';
import { useArticleAPI } from '../src/hooks/useArticleAPI';

import { data } from 'autoprefixer';
import dataGoogle from '../src/data/dataGoogle';
import dataYoutube from '../src/data/dataYoutube';
import { ResultsSearchInput } from '../src/component/ResultsSearchInput';
import { ArticleCard } from '../src/component/ArticleCard';
import { FirstCard } from '../src/component/FirstCard';
import dataArtSummary from '../src/data/dataArtSummary';
import dataArtExtract from '../src/data/dataArtExtract';



const Results = () => {

  const router = useRouter();
  const searchQuery = router.query.searchQuery;

  // const { refetch: refetchYT, data: dataYT, isLoading:isLoadingYT} = useYoutubeSearchAPI(searchQuery)
  // const { refetch: refetchGS, data: dataGS, isLoading:isLoadingGS } = useGoogleSearchAPI(searchQuery)  
  const dataGS = JSON.parse(dataGoogle);
  const dataYT = JSON.parse(dataYoutube);
  const dataAS = JSON.parse(dataArtSummary);
  const dataAE = JSON.parse(dataArtExtract);

  console.log(dataAE)
  return (
    <div>
      <ResultsSearchInput />
      {/* {
        dataGS?.items?.slice(0,3)?.map(item=><ArticleCard data={item} key={item?.cacheTime} />)
      } */}
      <FirstCard data={dataAE} sum={dataAS} />
    </div>
  )
}

export default Results