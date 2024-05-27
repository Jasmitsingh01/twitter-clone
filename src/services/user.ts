import instance from ".";

import { toast } from "react-toastify";

interface uploadImage {
    image:File | Object;
}

export const uploadImage =async(data:uploadImage)=>{
    try {
      const image= await instance.post('/image',data);
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
      const details= await instance.put('/details',data);
      if(details.status ==200){
         toast.success('details success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }

