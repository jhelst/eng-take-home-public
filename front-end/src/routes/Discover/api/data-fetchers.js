import axios from 'axios'

export const getPlaylist = async ({ type, token }) => {
  try {
    const response = await axios.post(
      '/get-data',
      {
        type,
        token,
        country: 'US',
        limit: '10',
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    return response.data
  } catch {
    console.log('oop')
  }
}
