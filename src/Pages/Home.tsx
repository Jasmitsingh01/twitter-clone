import { useEffect, useState } from "react"
import Button from "../ui/button";
import Tweet from "../components/Tweet";
import { Modal } from "@mui/material";
import CreateTweet from "../components/CreateTweet";
import { useNavigate } from "react-router-dom";
import authencation from '../utils/authentication'
import { getTweet } from "../services/tweet";
function Home() {
  const Navigate=useNavigate();
  const [IsOpen,setIsOpen]=useState(false)
   const [data,setdata]=useState([])
   const [render,setRender] = useState(false);
  useEffect(()=>{
    getTweet().then((tweet)=>{
      setdata(tweet)
      
    })
  },[render])
  
  return (
    <div className=" p-3 ">
      <Modal open={IsOpen}>
        <div className='  p-3 flex justify-center '>
          <CreateTweet render={()=>setRender(!render)} close={()=>setIsOpen(false)}/>
        </div>
      </Modal>
      <div className="w-full flex items-center justify-between  mb-3">
        <h3 className=" font-semibold text-2xl">Home</h3>
        <Button classname={"bg-blue-500 font-semibold text-white rounded  p-x-5 py-3 w-36"} onClick={()=>
          authencation()?setIsOpen(true):Navigate('/login')} Name="Tweet"/>
      </div>
      <div>
       {
        data?.map((tweet,index)=>{
        const {TweetBy,content,likeby,reply,image,_id}=tweet||{}
         return( <Tweet key={index} TweetBy={TweetBy} content={content} likeby={likeby} reply={reply} image={image} ids={_id} render={()=>setRender(!render)}/>)
        
       })
      }
      </div>
    </div>
  );
}

export default Home;
