import { useQuery } from 'react-query'
import axios from 'axios'

export const useGoogleSearchAPI = (query) => {
    return useQuery(
        "google-search",
        async () => {
          const res = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API}&cx=45dc534a1d2f44b16&q=${query}`);
          return res.data;
        },
        {
          enabled: false
        }
    );
}