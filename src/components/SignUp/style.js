import styled from 'styled-components';

 export const SignUpWrapper =styled.div`
 background-color:#121212;
 width:100%;
 height:600px;
 `;
 export const SignUpContent=styled.div`
 padding:60px;
 display:flex;
 flex-direction:column;
 align-items:center;

 `;
 export const SignUpIcon =styled.div`
 border-radius:50px;
 background-color:#f48fb2;
 width: 20px;
    height: 20px;
    padding: 10px;
    font-size: 18px;
 `;
 export const SignUpTitle=styled.div`
color:#ffff;
margin-top:13px;
margin-bottom:23px;
font-weight: 400;
 `;
 export const FormWrapper=styled.div`
 display:flex;
 `;
 export const InputFName=styled.input`
 width:150px;
 height:42px;
margin-right:11px;
padding-left:10px;
background: transparent;
webkit-border-radius: 5px; 
   -moz-border-radius: 5px; 
   -khtml-border-radius: 5px;
border-radius:5px;
border: 1px solid #979797; 
color:white;
::placeholder{
    color:#9a9a9a;
}
 `
 export const InputLName=styled.input`
 width:150px;
 height:42px;
 padding-left:10px;
 background: transparent;
 webkit-border-radius: 5px; 
    -moz-border-radius: 5px; 
    -khtml-border-radius: 5px;
 border-radius:5px;
 border: 1px solid #979797; 
 color:white;
 ::placeholder{
     color:#9a9a9a;
 `;
 export  const InputEmail=styled.input`
 margin-top:15px;
 width:321px;
 height:42px;
 padding-left:10px;
 background: transparent;
 webkit-border-radius: 5px; 
    -moz-border-radius: 5px; 
    -khtml-border-radius: 5px;
 border-radius:5px;
 border: 1px solid #979797; 
 color:white;
 ::placeholder{
     color:#9a9a9a;
 `;
 export const InputPassword=styled.input`
 margin-top:15px;
 width:321px;
 height:42px;
 padding-left:10px;
 background: transparent;
 webkit-border-radius: 5px; 
    -moz-border-radius: 5px; 
    -khtml-border-radius: 5px;
 border-radius:5px;
 border: 1px solid #979797; 
 color:white;
 ::placeholder{
     color:#9a9a9a;
 `
 export const CheckBox=styled.input`
 border:1px solid white;
 width:15px;
 height:15px;
 margin-top:20px;
 
 `;
 export const LabelStyle=styled.div`

 color: white;
  fontFamily: "'Roboto', sans-serif";
   fontSize: 13px;
   display:flex;
   margin-right:32px;
 `;
export const LabelText=styled.div`
margin-top:10px;
margin-left:5px;
`;
export const Button=styled.button`
width:323px;
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
export const Copyright=styled.footer`
text-align:center;
color:white;
font-size:12px;
margin-top:50px;
`;
