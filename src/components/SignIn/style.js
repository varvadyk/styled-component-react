
import styled from 'styled-components';

 export const SignInWrapper =styled.div`
 
 width: 100%;
 
background-color:#121212;
 display:flex;
 justify-content:center;
 font-family: 'Roboto', sans-serif;
 font-size:24px;
 `;
 export const SignInContent=styled.div`
 margin:90px;
 display:flex;
 flex-direction:column;
 align-items:center;

 `

 export const SignInIcon =styled.div`
 border-radius:50px;
 background-color:#f48fb2;
 width: 20px;
    height: 20px;
    padding: 10px;
    font-size: 18px;
 `;
 
 export const SignInTitle=styled.div`
color:#ffff;
margin-top:13px;
margin-bottom:23px;
font-weight: 400;
 `;
 export const FormWrapper=styled.div`
 display:flex;
 flex-direction:column;
 `;
export const Input=styled.input`
width:290px;
height:40px;
background: transparent;
webkit-border-radius: 5px; 
   -moz-border-radius: 5px; 
   -khtml-border-radius: 5px;
border-radius:5px;
border: 1px solid #979797; 
padding-left:10px;
margin-bottom:20px;
color:white;
`;

export const CheckBox=styled.input`
border:1px solid white;
width:15px;
height:15px;

`;
export const LabelStyle=styled.div`
color: white;
fontFamily: 'Roboto' sans-serif;
font-size: 13px;
`;
export const Button=styled.button`
width:290px;
height:30px;
background-color:#90caf9;
border: none;
margin-top:20px;
border-radius: 5px;
font-weight: 400;
color:#1e2933;
&:hover {
   background-color: #b3ccff;
   transform: scale(1.03);
   transition: all 0.3s;
   cursor: pointer;
  }
`;
export const TextWrapper=styled.a`

`;
export const Copyright=styled.footer`
text-align:center;
color:white;
font-size:12px;
margin-top:50px;
`;
