export const fetchApi = async (url) => {
  try {
    const req = await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'authority': 'corona.lmao.ninja',
        'Content-Type': 'application/json'
      }
    })
    const data = await req.json()
    alert(data)
    return data
  } catch (e) {
    console.log(e)
  }
}