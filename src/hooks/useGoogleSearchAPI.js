import { useQuery } from 'react-query'
import axios from 'axios'

export const useGoogleSearchAPI = (query) => {
    return useQuery(
        "google-search",
        async () => {
          const res = await axios.get(`/.netlify/functions/fetch-g-res?query=${query}`);
          return res.data;
        },
        {
          refetchOnWindowFocus:false
        }
    );
}