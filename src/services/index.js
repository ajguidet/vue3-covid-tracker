export const fetchApi = async (url) => {
  try {
    const req = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await req.text()
    return data
  } catch (e) {
    console.log(e)
  }
}