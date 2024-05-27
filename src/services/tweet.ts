
import instance from ".";



import { toast } from "react-toastify";



interface tweet{
      content:string ;
}

export const createTweet =async(data:tweet)=>{
    try {
      const tweet= await instance.post('/tweet',data);
      if(tweet.status ==200){
         toast.success('tweet success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }

 export const getTweet =async()=>{
    try {
      const tweet= await instance.get('/tweet');
      if(tweet.status ==200){
         toast.success('tweet success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }
 export const deleteTweet =async(id:string)=>{
    try {
      const tweet= await instance.delete(`/tweet/${id}`);
      if(tweet.status ==200){
         toast.success('tweet success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }


 export const updateTweet =async(id:string,data:tweet)=>{
    try {
      const tweet= await instance.put(`/tweet/${id}`,data);
      if(tweet.status ==200){
         toast.success('tweet success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }
 export const likeTweet =async(id:string)=>{
    try {
      const tweet= await instance.put(`/tweet/${id}`);
      if(tweet.status ==200){
         toast.success('tweet success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }

 export const unlikeTweet =async(id:string)=>{
    try {
      const tweet= await instance.delete(`/tweet/${id}`);
      if(tweet.status ==200){
         toast.success('tweet success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }
 export const retweetTweet =async(id:string)=>{
    try {
      const tweet= await instance.put(`/tweet/${id}`);
      if(tweet.status ==200){
         toast.success('tweet success')
      }
     
    } catch (error:any) {
     toast.error(error)
    } 
 }
