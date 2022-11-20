import { useQuery } from 'react-query'
import axios from 'axios'

export const useYoutubeSearchAPI = (query) => {
    return useQuery(
        "youtube",
        async () => {
          const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${process.env.NEXT_PUBLIC_GOOGLE_API}`);
          return res.data;
        },
        {
          enabled: false
        }
    );
}