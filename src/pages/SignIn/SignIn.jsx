import React, {useState ,useContext} from "react";
import logo from './../../../public/img/logo.png'
import { AuthContext } from './../../context/AuthContext';
import { Redirect } from 'react-router-dom';
import Loading  from "../../components/cores/Loading";
import Button from "../../components/cores/Button";

export default function SignIn(props) {
  const { location } = props;
  const { state } = location; 
  let page_after_sign_in="/";
  if (state && state.from) {
    page_after_sign_in =state.from.pathname;
  }
  const [states,setStates]=useState({
    signing_in:false,
    error:false,
    page_after_sign_in
  })
  const { signin, authed, account_type_info } =useContext(AuthContext);
 
  const  submit= async(e)=>{
    e.preventDefault();
    setStates({...states,signing_in:true,error:false})
    signin(e.target['username'].value,e.target['password'].value)
  }

  const {signing_in ,error,signed_in}=states;
  
  if(authed){
    return(
      <Redirect to={'/'}/>
    )
  }
  return (
    <div className="sign-in-container">
     
      <div className="sign-in">
        <img className="img" src={logo} alt="avatar" />
        <form onSubmit={submit} >
          <input  type="email" placeholder="Enter Email" name="username" required />
          <input name="password" type="password" placeholder="Enter Password" required />
          {error &&( <div className="error"><p>{error}</p></div> )}
          {!signing_in && <Button name="sign in" />}
          {signing_in && <Loading />}
        </form>
      </div>
    </div>
  );
}