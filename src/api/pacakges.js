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

export const update_package_status = async (token ,account_type ,package_id, new_status,old_status) =>{
  const data={"status": new_status}
  const response = await fetch(`https://green-mile-backend.herokuapp.com/${account_type}/package/${package_id}/`, {
    method: 'PATCH',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token , 
    },
    body: JSON.stringify(data),
  });
  const results = await response.json()
  const status = await results.status
  if(status == old_status){
    return false
  }else return true
}