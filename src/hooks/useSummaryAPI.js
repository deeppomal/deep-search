import { useQuery } from 'react-query'
import axios from 'axios'

export const useSummaryAPI = (articleData) => {
    let articleLink = articleData?.link
    return useQuery(
        ["summary",articleData?.title],
        async () => {
            const res = await axios.get(`/.netlify/functions/fetch-as-res?articleLink=${articleLink}`);
            return res.data;
        },
        {
          refetchOnWindowFocus:false,
        }
    );
    
}

