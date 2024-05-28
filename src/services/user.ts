import instance from ".";

import { toast } from "react-toastify";
import instancefile from "./file";



export const uploadImage =async(data:any)=>{
    try {
      const image= await instancefile.post('auth/uploadImage',data);
      if(image.status ==200){
         toast.success('image success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }

 interface updateDetails {
    name:string;
    location:string;
    Dob:string;
 }

 export const updateDetail =async(data:updateDetails)=>{
    try {
      const details= await instance.put('auth/:id',data);
      if(details.status ==200){
         toast.success('details success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }


 export const getUserDetails =async(id:string)=>{
    try {
      const details= await instance.get(`/auth${id!=''?'/:id?id='+id:'/:id'}`);
      if(details.status ==200){
         toast.success('details success')
         return details.data?.data
      }
     
    } catch (error:any) {
     toast.error(error)
    }
 }

