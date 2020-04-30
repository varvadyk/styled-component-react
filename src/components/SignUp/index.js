import React,{useState} from 'react';
import {SignUpWrapper,SignUpContent, SignUpIcon,SignUpTitle,FormWrapper,InputFName,InputLName,InputEmail,InputPassword,CheckBox,LabelStyle,LabelText,Button,Copyright} from './style.js';
import {MdCopyright} from "react-icons/md";
import {MdLockOutline} from "react-icons/md";
import{Link} from 'react-router-dom';
const SignUp =() =>{
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [fname,setFName]=useState('');
    const [lname,setLName]=useState('');
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
    const getFName=(e) =>{
        setFName(e.target.value)
      if(/^(?=.*[A-Z])(?=.*[a-z]).{3,}$/.test(fname)){
        e.target.style.borderColor="green";
    
      }
      else{
        e.target.style.borderColor="red";
    }
      }
      const getLName=(e) =>{
        setLName(e.target.value)
      if(/^(?=.*[A-Z])(?=.*[a-z]).{3,}$/.test(lname)){
        e.target.style.borderColor="green";
    
      }
      else{
        e.target.style.borderColor="red";
    }
      }
return(
    <SignUpWrapper>
   <SignUpContent>
<SignUpIcon >
<MdLockOutline/>
</SignUpIcon>
<SignUpTitle>
       Sign up
     </SignUpTitle>
     <FormWrapper>
<InputFName placeholder="First Name *" onChange={getFName}/>
<InputLName  placeholder="Last Name *" onChange={getLName}/>
    </FormWrapper>
    <InputEmail placeholder="Email Adress*" onChange={getEmail}/>
    <InputPassword placeholder="Password *" onChange={ getPassword}/>
    <LabelStyle >
       <CheckBox type="checkbox" />  <LabelText>I want to receive inspiration,marketing<br/>
        promotions and updates via email
       </LabelText>
    </LabelStyle>
    <Button type="button">SIGN UP</Button>
    <Link to="/styled-component-react/" style={{textDecoration:'none',color:'#6186a3', fontSize: '12px',paddingTop:"18px",paddingLeft:"140px"}}>Already have an account?Sign in</Link>
    <Copyright>Copyright <MdCopyright/> Your Website 2020</Copyright>
</SignUpContent>
    </SignUpWrapper>
)
}
export default SignUp;