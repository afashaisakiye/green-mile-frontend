import React ,{useState} from "react";
import { useDispatch } from 'react-redux'
import { login } from './../../actions/authenticationActions'
import { login as authenticate } from './../../api/auth'

export default function  SignIn(props) {
  const dispatch = useDispatch()
  const [error, set_error] = useState("")
  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    authenticate(e.target.username.value,e.target.password.value).then((res)=>{
      if(res.authenticated== true){
        dispatch(login(res))
      }else{
        set_error(res.error)
      }
    })
  }

  return (
    <div className="container">
    <div className="sign-in">
      <h2>Login</h2>
      <form onSubmit={submit} >
        <p>{error}</p>
        <input  type="text" placeholder="Enter Username" name="username" required />
        <input name="password" type="password" placeholder="Enter Password" required />
        <button>Login</button>
      </form>
    </div>
  </div>
  );
}