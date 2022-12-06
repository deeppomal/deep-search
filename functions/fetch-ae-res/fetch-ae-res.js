const axios = require('axios')

const handler = async (event) => {
  const {articleLink} = event.queryStringParameters

  const API_SECRET = process.env.ARTICLE_API 

  try {
    const { data } = await axios.request({
      method: 'GET',
      url: 'https://lexper.p.rapidapi.com/v1.1/extract',
      params: {
        url: articleLink,
        media: 'false'
      },
      headers: {
        'X-RapidAPI-Key': `${API_SECRET}`,
        'X-RapidAPI-Host': 'lexper.p.rapidapi.com'
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
