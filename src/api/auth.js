export const login = async (username , password) =>{
    const data = {username, password }
    try {
      const response = await fetch('https://green-mile-backend.herokuapp.com/auth/login', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });

      const status = await response.status
      const user_data = await response.json()
      if(status==200){
        return{
          authenticated:true,
          username:user_data.user.username,
          id:user_data.user.id,
          token:user_data.token
        }
      }else if(status ==401){
        return {
          error:true,
          authenticated:false,
          message:user_data.detail
        }
      }
    } catch (error) {
      return {
        error:true,
        authenticated:false,
        message:"Unknown Error"
      }
    }
}