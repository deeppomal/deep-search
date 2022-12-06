import { useQuery } from 'react-query'
import axios from 'axios'

export const useYoutubeSearchAPI = (query) => {
    return useQuery(
        "youtube",
        async () => {
          const res = await axios.get(`/.netlify/functions/fetch-yt-res?query=${query}`);
          return res.data;
        },
        {
          refetchOnWindowFocus:false
        }
    );
}