import React from 'react'
import { useArticleAPI } from '../hooks/useArticleAPI';

export const ArticleCard = ({data}) => {

    const {data: dataArticle} = useArticleAPI(data);
  return (
    <div>ArticleCard</div>
  )
}
