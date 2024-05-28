import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ReplyIcon from '@mui/icons-material/Reply';
import { useState } from 'react';
import { Modal } from '@mui/material';
import Reply from './Reply';
import DeleteIcon from '@mui/icons-material/Delete';
import authencation from '../utils/authentication';
import { Link, useNavigate } from 'react-router-dom';
import { deleteTweet, likeTweet } from '../services/tweet';
interface tweet{
  TweetBy:{
    username:string;
    avatar:string;
    name:string;
    _id:string
  };
  content:string;
  likeby:[object];
  reply:[object];
  image:string;
  ids:string
  render:() => void;
}
function Tweet({TweetBy,content,likeby,reply,image,ids,render}:tweet) {
  const Navigate=useNavigate()
  const [ Isopen,setIsOpen ]=useState(false)
  const [like,setlike]=useState(false)
  const Handledit=()=>{
    setIsOpen(true)
  }
  const handleLikes=()=>{
    setlike(!like)

    
     likeTweet(ids).then(()=>{render();close()})
    
  }
  return (

    <div className=' border-2 mb-2 px-3 relative'>
      <Modal open={Isopen} className=' mx-auto' >
        
        <div className='  p-3 flex justify-center '>
          <Reply id={ids} close={()=>setIsOpen(false)} render={render}/>
        </div>
      </Modal>
  <div>
  <div className=' mb-4'>{TweetBy?.username}</div>
    <div className=' flex  gap-2  mb-4'>
    <img src={TweetBy?.avatar} alt="/" className=" w-[50px] h-[50px] object-cover rounded-full"/>

          <div className=''>
          <Link to={`/profile/${TweetBy._id}`}> <p> <span>{TweetBy?.name}</span> </p></Link>
           <p>Thu Dec 22 2022</p>
          </div>
         

    </div>
    <div>
    <p className='mb-4'>
      {content}

    </p>
    {
      image?    <img src={image} alt="/" className="w-full  mb-4"/>
:''
    }
    </div>
    <div className=' w-1/2 flex justify-between mb-3'>
      <button onClick={()=>authencation()?handleLikes():Navigate('/login')} className=' flex items-center gap-2 '>
        <FavoriteIcon style={{color:'red'}}/> {likeby?.length}
        </button>
      <button onClick={()=>authencation()?'do something You want to Do':Navigate('/login')} className=' flex items-center gap-2 '>
        <ChatIcon style={{color:"blue"}}/>{reply?.length}
      </button>
      <button onClick={()=>{authencation()?Handledit():Navigate('/login')}} className=' flex items-center gap-2 '>
        <ReplyIcon/>
      </button>
    </div>
  </div>
  <button className = " absolute top-0 right-4 " onClick={()=>authencation()?deleteTweet(ids).then(()=>{render();close();}):null} ><DeleteIcon/></button>
    </div>
  )
}

export default Tweet