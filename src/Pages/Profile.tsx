import  Button  from "../ui/button"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import { Modal } from "@mui/material";
import { useEffect, useState } from "react";
import UploadProfileIMage from "../components/UploadProfileIMage";
import Edit from "../components/edit";
import { getUserDetails } from "../services/user";
import authencation from "../utils/authentication";
import { useNavigate } from "react-router-dom";

interface userData{
  name: string
  username:string;
  email:string;
  avatar:string;
  location?:string;
  Dob?:string;
  followers?:Array<string|undefined>
  following?:Array<string|undefined>
}
function Profile() {
 const [uploadImage,setuploadImage] =useState<Boolean>(false);
 const [edit,setedit] =useState<Boolean>(false);
 const [user,setuser]= useState <userData>();
 const Navigate=useNavigate()
useEffect(() =>{
    if(!authencation()){
   Navigate('/login')
    }
     if(!uploadImage){
      getUserDetails().then((user) =>{
        setuser(user)
      }).catch((error) =>
        console.log(error)
      );
     }
    
  
},[uploadImage])
useEffect(()=>{
if(!edit){
  getUserDetails().then((user) =>{
    setuser(user)
  }).catch((error) =>
    console.log(error)
  );
}
},[edit])
const {username,avatar,location,Dob,followers,following,name}=user||{};
console.log(avatar)
  return (
    <>
    <Modal open={uploadImage}>
     <div className=" w-1/2 px-5 mx-auto bg-white">
      <h3>Upload Profile Image</h3>
      <UploadProfileIMage close={()=>setuploadImage(false)}/>
     </div>

    </Modal>
    <Modal open={edit}>
   <div className=" flex  flex-col  p-5 bg-white w-1/2 mx-auto ">
    <div className="flex justify-between  bg-white">
      <h3 className="  text-xl font-semibold">Edit Profile</h3>
       <Button classname="p-2 bg-gray-300" onClick={()=>setedit(false)} Name="x" />
     </div>
     <Edit close={()=>setedit(false)}/>
   </div>
    </Modal>
    <div className=" p-3">
        <h3 className=" text-2xl font-semibold mb-3">Profile</h3>
        <div className="flex relative px-5 bg-blue-500 h-[200px] items-center justify-between mb-[60px]">
            <img src={avatar}  className=" w-[100px] h-[100px] absolute bottom-[-30px] rounded-full" />
            <div className=" absolute bottom-[-80px]  h-[100px] w-full flex items-center justify-end px-10">
                <Button classname=" text-blue-500 p-3   font-semibold border-blue-500 border-2 me-3 " types="button" Name=" upload Profile Image" onClick={()=>setuploadImage(true)} />
                <Button classname=" text-gray-500 p-3   font-semibold border-gray-500 border-2 " types="button" Name=" Edit" onClick={()=>setedit(true)} />

            </div>
        </div>
        <div>
            <p className=" text-3xl font-semibold">{name}</p>
            <p className="mb-5">{username?'@'+username:''}</p>

        </div>
        <div className=" flex gap-5 mb-4">
          <p className=" flex items-center gap-2"><span><CalendarTodayIcon/></span>Dob -{Dob}</p>
          <p className=" flex items-center gap-2"><span><LocationOnIcon/></span>Location -{location}</p>
        </div>
       <p className="flex items-center gap-2  mb-3"><span><WorkIcon/></span>Joined Date</p>
       <div className=" flex gap-3 font-semibold">
         <p>{following?.length} following</p>
         <p>{followers?.length} followers</p>
       </div>
       <div>
        <h3 className=" text-2xl font-semibold text-center">Tweets and Reply's</h3>
       </div>
    </div>
    </>
  )
}

export default Profile