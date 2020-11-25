export const getAllMessage = () => {
  return fetch(`http://localhost:3001/getAllMessage`, 
  {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => {
      return response
    })
    .catch(err => console.log(err))
  }
