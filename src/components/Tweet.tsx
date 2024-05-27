import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ReplyIcon from '@mui/icons-material/Reply';
import { useState } from 'react';
import { Modal } from '@mui/material';
import Reply from './Reply';
import DeleteIcon from '@mui/icons-material/Delete';
import authencation from '../utils/authentication';
import { useNavigate } from 'react-router-dom';

function Tweet() {
  const Navigate=useNavigate()
  const [ Isopen,setIsOpen ]=useState(false)
  
  return (

    <div className=' border-2 mb-2 px-3 relative'>
      <Modal open={Isopen} className=' mx-auto' >
        
        <div className='  p-3 flex justify-center '>
          <Reply  close={()=>setIsOpen(false)}/>
        </div>
      </Modal>
  <div>
  <div className=' mb-4'>@Retweet by Ronaldo</div>
    <div className=' flex gap-5 mb-4'>
      <img src="/download.jpeg" alt="/" className=" w-[50px] h-[50px] object-cover rounded-full"/>
       <p> <span>Name -</span> Thu Dec 22 2022</p>
       
    </div>
    
    <p className='mb-4'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate a magnam, nam pariatur iusto dolorum! Inventore, deserunt tenetur! Vero, tenetur.
    </p>
    <div className=' w-1/2 flex justify-between mb-3'>
      <button onClick={()=>authencation()?'do something You want to Do':Navigate('/login')} >
        <FavoriteIcon style={{color:'red'}}/>
        </button>
      <button onClick={()=>authencation()?'do something You want to Do':Navigate('/login')}>
        <ChatIcon style={{color:"blue"}}/>
      </button>
      <button onClick={()=>authencation()?setIsOpen(!Isopen):Navigate('/login')}>
        <ReplyIcon/>
      </button>
    </div>
  </div>
  <button className = " absolute top-0 right-4 " ><DeleteIcon/></button>
    </div>
  )
}

export default Tweet