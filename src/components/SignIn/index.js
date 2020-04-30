import React,{useState} from 'react';
import {MdLockOutline} from "react-icons/md";
 import {MdCopyright} from "react-icons/md";
import { SignInWrapper,SignInContent,SignInIcon ,SignInTitle, FormWrapper,Input,LabelStyle,CheckBox,Button,TextWrapper,Copyright} from './style.js'
import{Link} from 'react-router-dom';
const SignIn = ()=>{
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('');
  const getEmail=(e)=>{
    setEmail(e.target.value)
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
   e.target.style.borderColor="green";

    }
    else{
      e.target.style.borderColor="red";
  }
}
  const getPassword=(e) =>{
    setPassword(e.target.value)
  if(/^(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(password)){
    e.target.style.borderColor="green";

  }
  else{
    e.target.style.borderColor="red";
}
  }
  return  (
    <>
    <SignInWrapper>
      <SignInContent>
      <SignInIcon>
     <MdLockOutline />
      </SignInIcon>
     <SignInTitle>
       Sign in
     </SignInTitle>
     <FormWrapper>
    <Input type="email" id="email" placeholder="Email Adress*" onChange={getEmail} />
    <Input type="text" placeholder="Password *"  onChange={getPassword}/>

    <LabelStyle  >
       <CheckBox type="checkbox"/>  Remember me
    </LabelStyle>
     
    </FormWrapper>
    <Button type="button" >SIGN IN</Button>
     <TextWrapper>
     <Link to="#" style={{textDecoration:'none',color:'#6186a3', fontSize: '12px', paddingRight:'30px '}}>Forgot password?</Link>
     <Link to="/styled-component-react/signup" style={{textDecoration:'none',color:'#6186a3', fontSize: '12px' }}>Don`t have account?Sign Up</Link>
     </TextWrapper>
     <Copyright>Copyright <MdCopyright/> Your Website 2020</Copyright>
     </SignInContent>
    </SignInWrapper>
   </>
);
}
export default SignIn;