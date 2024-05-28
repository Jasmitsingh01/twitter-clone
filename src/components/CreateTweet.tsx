import { useForm ,Controller} from "react-hook-form"
import InputBox from "../ui/inputBox"
import Button from "../ui/button"
import { useState } from "react";
import { createTweet } from "../services/tweet";

function CreateTweet({close,render}:{
  close: () => void,
  render: () => void
}) {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | DOMException >('');
  const { handleSubmit , control ,formState:{errors},register}=useForm({
    defaultValues:{
      content:'',
      image :{}    }
  });
  const onSubmit=(data:any)=>{
    const formData=new FormData()
    formData.append('content',data?.content)
    formData.append('image',data?.image[0])
    createTweet(formData).then(()=> {close();render()})
   
  }
  const previewImage=(file:any)=>{

    const files=file.target?.files[0]
    const reader=new FileReader();
    reader.readAsDataURL(files);
    reader.onload=()=>{
      setImageSrc(reader.result||'')

    }
    console.log(imageSrc)
    reader.onerror=()=>{
      setImageSrc(reader.error||'')
    }
   
  }
  return (
    <form onSubmit={handleSubmit((data)=>onSubmit(data))} className=" w-1/2 bg-white p-3 ">
      <div className=" flex  justify-between">
        <h3 className=" font-semibold text-lg">Create Tweet</h3>
        <Button Name="X" types="button" classname=" p-4 bg-gray-300 text-white" onClick={close} />
      </div>
      <div>
   <Controller name="content" rules={{
    required: { value: true, message: "Content is required" },
  
   }}
   
   control={control}
     render={({field:{onChange,value}})=>
     <InputBox value={value} onChange={onChange} label="" type="text"  placeholder={'Content'} classname=" w-full my-3 outline-none border-2 p-3 rounded mb-4" error={errors.content?.message}/>
    }
   />

   <Controller name="image" rules={{
    required: { value: true, message: "Image is required" }
   }}
   control={control}
   render={({field:{}})=>
   <input {...register('image')} type="file"  placeholder={'Image'} className=" p-3 rounded mb-4"  onChange={(e)=>previewImage(e)} />
   }
   />
   <div>
       <img src={imageSrc} alt="" className="  w-[500px] h-[500px]" />
   </div>
   <div className="text-red-500 font-semibold my-2">{errors.image?.message}</div>
   <div className=" flex justify-end p-3 gap-3 border-t-2">
   <Button Name="Back" types="button" classname=" p-2 rounded-md  bg-gray-300 text-white" onClick={close} />

     <Button Name={'Create'} types="submit" classname=" p-2 rounded-md bg-blue-400 text-white" />
   </div>
      </div>

    </form>
  )
}

export default CreateTweet