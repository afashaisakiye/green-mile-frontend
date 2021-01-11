export const load_packages= async (token , account_type )=>{
    const response = await fetch(`https://green-mile-backend.herokuapp.com/${account_type}/packages/`, {
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token , 
        },
       
      });
      return response.json(); // parses JSON response into native JavaScript objects
}