import React, {useState ,useContext, useHistory} from "react";
import logo from './../../public/img/logo.png'
import { signInUser} from './../utils/api';
import { AuthContext } from './../context/AuthContext';
import { Redirect } from 'react-router-dom';

export default function SignIn(props) { 
  const [signing_in ,set_signing_in_state]=useState(false);
  const [signed_in ,set_signed_in_state]=useState(false);
  const [error ,set_error_state]=useState(false);
  const {setAuth} =useContext(AuthContext);
  const [next_page,set_next_page]=useState(false)
  const  submit= async(e)=>{
    e.preventDefault();
    set_signing_in_state(true);
    set_error_state(false);
    const x=await signInUser(e.target['username'].value,e.target['password'].value)
    if(!x){
      set_error_state(true);
      set_signing_in_state(false);
      return;
    }
    setAuth(x);
    const { location } = props;
    const { state } = location;
    if (state && state.from) {
      set_next_page(state.from.pathname)
    }else {
      set_next_page('/');
    }
    set_signed_in_state(true)
  }


  if(signed_in){
    return(
      <Redirect to={next_page}/>
    )
  }

  return (
    <div className="sign-in-container">
      <div className="right">
        <div>
          <h1 className="quote">Welcome to Green Mile Platform, Let's Deliver the packages</h1>
        </div>
      </div>
      <div className="sign-in">
        <img className="img" src={logo} alt="avatar" />
        <form onSubmit={submit} >
          <input  type="email" placeholder="Enter Email" name="username" required />
          <input name="password" type="password" placeholder="Enter Password" required />
          {error &&( <div className="error"><p>Wrong username or password</p></div> )}
          {!signing_in &&(<button type="submit">signin</button>)}
        </form>
        {signing_in && (
        <div className="signing-in">
          <span><i className="fas fa-spinner fa-spin"></i></span>
          <span>PLEASE WAIT</span>
        </div>
        )}
        
      </div>
    </div>
  );
}
