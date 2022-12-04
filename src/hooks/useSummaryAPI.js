import { useQuery } from 'react-query'
import axios from 'axios'

export const useSummaryAPI = (data) => {
    return useQuery(
        ["summary",data?.title],
        async () => {
            const res = await axios.request({
                method: 'GET',
                url: 'https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0',
                params: {
                  url: data?.link,
                  sentences: '7'
                },
                headers: {
                    'Accept': 'application/json',
                    'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_ARTICLE_API}`,
                    'X-RapidAPI-Host': 'meaningcloud-summarization-v1.p.rapidapi.com'
                }
              });
            return res.data;
        },
        {
          refetchOnWindowFocus:false,
          // enabled:false
        }
    );
    
}

