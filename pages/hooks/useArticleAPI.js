import { useQuery } from 'react-query'
import axios from 'axios'

export const useArticleAPI = (data) => {
    return useQuery(
        ["article",data.title],
        async () => {
            const res = await axios.request({
                method: 'GET',
                url: 'https://lexper.p.rapidapi.com/v1.1/extract',
                params: {
                  url: data.url,
                  media: 'false'
                },
                headers: {
                  'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_ARTICLE_API}`,
                  'X-RapidAPI-Host': 'lexper.p.rapidapi.com'
                }
              });
            return res.data;
        },
    );
    
}

