import instance from ".";

import { toast } from "react-toastify";
interface login{
    username:string;
    password:string;
}

interface register{
    email:string;
    password:string;
    username:string;
  confirmPassword?:string;
}

export const login =async(data:login)=>{
   try {
     const logins= await instance.post('auth/login',data);
     if(logins.status ==200){
        localStorage.setItem('token_access',logins.data.accessToken)
        toast.success('login success')
        window.location.href='/'
        alert('sss')
     }
    
   } catch (error:any) {
    toast.error(error)
   } 
}





export const register =async(data:register)=>{
    try {
      const register= await instance.post('auth/register',data);
      if(register.status ==201){
        localStorage.setItem('  token_access',register.data.accessToken)
         toast.success('register success')
         setTimeout(()=>         window.location.href='/',3000        )
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }