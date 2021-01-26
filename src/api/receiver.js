export const receiver_suggetions =async (token, supplier_id) => {
    // const response = await fetch('https://green-mile-backend.herokuapp.com/auth/account_type', {
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer '+token , 
    //   },
     
    // });
    //return response.json(); // parses JSON response into native JavaScript objects
    return [
        {
            id:20,
            email:"afashaisakiye@gmail.com",
        },
        {
            id:30,
            email:"herod@gmail.com",
        }
        
    ]
}