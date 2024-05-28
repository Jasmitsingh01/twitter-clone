
import instance from ".";



import { toast } from "react-toastify";
import instancefile from "./file";



export const createTweet =async(data:any)=>{
    try {
      const tweet= await instancefile.post('/',data);
      if(tweet.status ==201){
         toast.success('tweet successfully created')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }

 export const getTweet =async()=>{
    try {
      const tweet= await instance.get('/');
      if(tweet.status ==200){
         toast.success('tweet success')
         return tweet.data?.data
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }
 export const deleteTweet =async(id:string)=>{
    try {
      const tweet= await instance.delete(`/${id}/delete`);
      if(tweet.status ==200){
         toast.success('tweet success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }


 export const likeTweet =async(id:string)=>{
    try {
      const tweet= await instance.put(`/${id}/like`);
      if(tweet.status ==200){
         toast.success('tweet success like')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }


 export const retweetTweet =async(id:string,tweets:{content:string})=>{
    try {
      const tweet= await instance.post(`/${id}/reply`,tweets);
      if(tweet.status ==200){
         toast.success('tweet success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }

 export const alltweetsbyUser = async(id:string)=>{
try {
   const tweet = await instance.get(`/tweet${id!=''?`?id=${id}`:''}`)
   if(tweet.status ==200){
      toast.success('tweet success')
      return tweet.data?.data
  

 }
} catch (error:any) {
   toast.error(error)
   
}
}