const axios = require('axios')

const handler = async (event) => {
  const {query} = event.queryStringParameters

  const API_SECRET = process.env.GOOGLE_API 
  const url = `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_SECRET}`

  try {
    const { data } = await axios.get(url)

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
