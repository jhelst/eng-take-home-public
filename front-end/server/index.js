const express = require('express')
const axios = require('axios')
const PORT = 3001

const app = express()

app.use(express.json())

// DEV NOTE: Eventually split this out to data calls, auth calls, etc in sibling directories, imported here.
app.post('/get-data', async (req, res) => {
  const { token, type, country, limit } = req.body
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/browse/${type}`,
      {
        params: { country, limit },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    res.json(response.data)
  } catch (e) {
    console.log(e)
  }
})

app.post('/get-user', async (req, res) => {
  const { token } = req.body
  try {
    const response = await axios.get(`https://api.spotify.com/v1/me`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    res.json(response.data)
  } catch (e) {
    console.log(e)
  }
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
