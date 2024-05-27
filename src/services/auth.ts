import instance from ".";

import { toast } from "react-toastify";
interface login{
    email:string;
    password:string;
}

interface register{
    name:string;
    email:string;
    password:string;
    usenames:string
}

export const login =async(data:login)=>{
   try {
     const logins= await instance.post('/login',data);
     if(logins.status ==200){
        localStorage.setItem('token_access',logins.data.accessToken)
        toast.success('login success')
        window.location.href='/'
     }
    
   } catch (error:any) {
    toast.error(error)
   } 
}





export const register =async(data:register)=>{
    try {
      const register= await instance.post('/register',data);
      if(register.status ==200){
         toast.success('register success')
         window.location.href='/'
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }