import React from 'react';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

 export const routes=[
    
  {
         path:'/styled-component-react/signup',
         component:<SignUp />
     },
     {
        path:'/styled-component-react/',
        component:<SignIn />,
         exact: true
    },

  {
    path:'*',
    component: ()=>(<div>page not found</div>),
   
 }
 ];