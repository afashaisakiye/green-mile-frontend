import React, {useState ,useContext, useHistory} from "react";
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
    signed_in:false,
    error:false,
    page_after_sign_in
  })
  const { signin, authed } =useContext(AuthContext);
 
  const  submit= async(e)=>{
    e.preventDefault();
    setStates({...states,signing_in:true,error:false})
    const x=await signin(e.target['username'].value,e.target['password'].value)
    if(x!==true){
      setStates({...states,signing_in:false,error:x.error_msg})
      return;
    }
    setStates({...states,signed_in:true})
  }

  const {signing_in ,error,signed_in}=states;
  if(signed_in){
    return(
      <Redirect to={page_after_sign_in}/>
    )
  }

  if(authed){
    return(
      <Redirect to={'/'}/>
    )
  }
  return (
    <div className="sign-in-container">
      <div className="right">
          <h1 className="quote">Welcome to Green Mile Platform, Let's Deliver the packages</h1>
      </div>
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