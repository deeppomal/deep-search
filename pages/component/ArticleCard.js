import React from 'react'
import dataArtExtract from '../dataArtExtract';
import dataArtSummary from '../dataArtSummary';
import { useArticleAPI } from '../hooks/useArticleAPI';
import { useSummaryAPI } from '../hooks/useSummaryAPI';

export const ArticleCard = ({data}) => {
  
  // const {data: dataArticle} = useArticleAPI(data);
  // const {data: dataSummary} = useSummaryAPI(data);

  const dataArticle = JSON.parse(dataArtExtract);
  const dataSummary = JSON.parse(dataArtSummary);
  
  return (
    <div>ArticleCard</div>
  )
}
