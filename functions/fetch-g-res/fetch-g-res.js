const axios = require('axios')

const handler = async (event) => {
  const {query} = event.queryStringParameters

  const API_SECRET = process.env.GOOGLE_API 
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_SECRET}&cx=45dc534a1d2f44b16&q=${query} -wikipedia -youtube`

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
