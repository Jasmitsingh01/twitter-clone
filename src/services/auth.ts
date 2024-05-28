import { AxiosError } from "axios";
import instance from ".";

import { toast } from "react-toastify";
interface login{
    username:string;
    password:string;
}
interface MyResponseError extends AxiosError{
  response: {
    data: {
      message: string;
    };
  };
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
      localStorage.setItem('token_access',logins.data?.data?.accessToken);
      localStorage.setItem('token_refresh',logins.data?.data?.accessToken);
      toast.success('login success')
      setTimeout(()=>         window.location.href='/',3000        )
     }
    
   } catch (error:any) {
    const err = error as MyResponseError
    toast.error(err.response?.data?.message)   } 
}





export const register =async(data:register)=>{
    try {
      const register= await instance.post('auth/register',data);
      if(register.status ==201){
        console.log(register)
        localStorage.setItem('token_access',register.data?.data?.accessToken)
        localStorage.setItem('token_refresh',register.data?.data?.accessToken)
         toast.success('register success')
         setTimeout(()=>         window.location.href='/',3000        )
      }
     
    } catch (error:any) {
      const err = error as MyResponseError
     toast.error(err.response?.data?.message)
    } 
 }


export const refreshToken=async(data:{token:string})=>{
  try {
    const refresh= await instance.post('auth/refresh',data);
    if(refresh.status ==200){
      localStorage.setItem('token_access',refresh.data?.data?.accessToken);
      localStorage.setItem('token_refresh',refresh.data?.data?.accessToken);
      toast.success('refresh success')
    }
  } catch (error:any) {
    const err = error as MyResponseError
    toast.error(err.response?.data?.message)
  }
}


export const logout =async()=>{
  try {
    const logout= await instance.post('auth/logout');
    if(logout.status ==200){
      localStorage.clear()
      toast.success('logout success')
      setTimeout(()=>window.location.href='/',3000        )
    }
  } catch (error:any) {
    const err = error as MyResponseError
    toast.error(err.response?.data?.message)
  }
}