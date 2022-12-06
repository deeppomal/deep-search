const axios = require('axios')

const handler = async (event) => {
  const {articleLink} = event.queryStringParameters

  const API_SECRET = process.env.ARTICLE_API 

  try {
    const { data } = await axios.request({
      method: 'GET',
      url: 'https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0',
      params: {
        url: articleLink,
        sentences: '7'
      },
      headers: {
          'Accept': 'application/json',
          'X-RapidAPI-Key': `${API_SECRET}`,
          'X-RapidAPI-Host': 'meaningcloud-summarization-v1.p.rapidapi.com'
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }
}

module.exports = { handler }
