import { useState } from "react"
import Button from "../ui/button";
import Tweet from "../components/Tweet";
import { Modal } from "@mui/material";
import CreateTweet from "../components/CreateTweet";
function Home() {
  const [IsOpen,setIsOpen]=useState(false)
  const Array=[1,2,3,4,5,6,7,8,9,10,11];
  return (
    <div className=" p-3 ">
      <Modal open={IsOpen}>
        <div className='  p-3 flex justify-center '>
          <CreateTweet close={()=>setIsOpen(false)}/>
        </div>
      </Modal>
      <div className="w-full flex items-center justify-between  mb-3">
        <h3 className=" font-semibold text-2xl">Home</h3>
        <Button classname={"bg-blue-500 font-semibold text-white rounded  p-x-5 py-3 w-36"} onClick={()=>setIsOpen(true)} Name="Tweet"/>
      </div>
      <div>
       {
        Array?.map((_,index)=>
          <Tweet key={index}/>
        )
       }
      </div>
    </div>
  );
}

export default Home;
