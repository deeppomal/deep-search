import { useQuery } from 'react-query'
import axios from 'axios'

export const useArticleAPI = (data) => {
    return useQuery(
        ["article",data?.displayLink],
        async () => {
          const res = await axios.get(`/.netlify/functions/fetch-ae-res?articleLink=${data?.link}`);
            
            return res.data;
        },
        {
          refetchOnWindowFocus:false,
          // enabled:false
        }
    );
    
}

