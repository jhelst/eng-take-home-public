import axios from 'axios'

export const getUserDetail = async ({ type, token }) => {
  try {
    const response = await axios.post(
      '/get-user',
      {
        token,
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
