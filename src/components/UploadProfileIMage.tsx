import {useState} from 'react'
import { useForm,Controller } from "react-hook-form";
import Button from '../ui/button';
import { uploadImage } from '../services/user';

function UploadProfileIMage({close}:{
    close: () => void,
  
}) {
    const {handleSubmit,register,control}=useForm();
    const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | DOMException |null>(null);
  
    const previewImage=(file:any)=>{
  
      const files=file.target?.files[0]
      const reader=new FileReader();
      reader.readAsDataURL(files);
      reader.onload=()=>{
        setImageSrc(reader.result )
      }
      reader.onerror=()=>{
        setImageSrc(reader.error)
      }
    }
  const  onsubmit=(data:any)=>{
    const formData=new FormData();
    formData.append('image',data?.image[0])
  uploadImage(formData)
  close()
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)}> 
        <Controller
          
          name="image"
          control={control}
          rules={{
            required: { value: true, message: "Image is required" }
          }}
          render={()=>
          <input {...register('image')} type="file"  placeholder={'Image'} className=" p-3 rounded mb-4"  onChange={(e)=>previewImage(e)} />
          }


        />
        <div className=' mb-3'>
            <img src={imageSrc||''} alt="" className=" w-[300px] h-[300px]" />
        </div>

<div className=' flex justify-end gap-3'>
<Button types='button' Name='close' classname=' p-2 bg-gray-500 rounded text-white my-3' onClick={close}/>

<Button types='submit' Name='Save profile Image' classname=' p-2 bg-blue-500 rounded text-white my-3'/>


    </div>        
    </form>
  )
}

export default UploadProfileIMage