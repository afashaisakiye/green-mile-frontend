export const receiver_suggetions =async (token, supplier_id) => {
    const response = await fetch(`https://green-mile-backend.herokuapp.com/hubmananger/supplier/${supplier_id}/receivers`, {
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token , 
      },
     
    });
    const data = await response.json(); // parses JSON response into native JavaScript objects
    return data.results
}