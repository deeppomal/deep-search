import React ,{useState}from 'react'
import { useGoogleSearchAPI } from '../src/hooks/useGoogleSearchAPI';
import { useYoutubeSearchAPI } from '../src/hooks/useYoutubeSearchAPI';
import { useRouter } from 'next/router';
import { useArticleAPI } from '../src/hooks/useArticleAPI';

import { data } from 'autoprefixer';
import dataGoogle from '../src/data/dataGoogle';
import dataYoutube from '../src/data/dataYoutube';
import { ResultsSearchInput } from '../src/component/ResultsSearchInput';
import { FirstCard } from '../src/component/FirstCard';
import dataArtSummary from '../src/data/dataArtSummary';
import dataArtExtract from '../src/data/dataArtExtract';
import { ResultsList } from '../src/component/ResultsList';
import { YoutubeList } from '../src/component/YoutubeList';



const Results = () => {

  
  const router = useRouter();
  const searchQuery = router.query.searchQuery;
  const [query,setQuery] = useState(router.query.searchQuery);


  // const { refetch: refetchYT, data: dataYT, isLoading:isLoadingYT} = useYoutubeSearchAPI(query)
  const { refetch: refetchGS, data: dataGS, isLoading:isLoadingGS, isRefetching } = useGoogleSearchAPI(query)  
  // const dataGS = JSON.parse(dataGoogle);
  // const dataYT = JSON.parse(dataYoutube);
  // const dataAS = JSON.parse(dataArtSummary);
  // const dataAE = JSON.parse(dataArtExtract);
  const onNewSearch = async (query) =>{
    await setQuery(query)
    refetchGS();
  }
  
  return (
    <div className='bg-[#191919] min-h-screen'>
      <ResultsSearchInput onNewSearch={onNewSearch} />
      <ResultsList data={dataGS}/>
      {/* <YoutubeList data={dataYT} /> */}
    </div>
  )
}

export default Results