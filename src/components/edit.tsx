import { useForm,Controller } from "react-hook-form";
import Button from '../ui/button';
import InputBox from "../ui/inputBox";
import { updateDetail } from "../services/user";
function Edit({close,render}:{
    close: () => void,
    render: () => void
}) {
    const {handleSubmit,control,formState:{errors}}=useForm({
        defaultValues:{
            name:'',
            location:'',
            Dob:''
        }
    });
const onsubmit=(data:any)=>{
  updateDetail(data).then(()=>{render();close()})


}
  return (
 <form className=" w-full" onSubmit={handleSubmit(onsubmit)}>
   <Controller
   name="name"
   control={control}
   rules={{
     required: { value: true, message: "Name is required" }
   }}
   render={({field:{onChange,value}})=>
   <InputBox  value={value} type="text" onChange={onChange} placeholder={'Name'} label="Name" classname="w-full outline-none border-2 p-3 rounded mb-4" error={errors.name?.message}  />
   }

   />
   <Controller
   name="location"
   control={control}
   rules={{
     required: { value: true, message: "location is required" }
   }}
   render={({field:{onChange,value}})=>
   <InputBox  value={value} type="text" onChange={onChange} placeholder={'location'} label="location" classname="w-full outline-none border-2 p-3 rounded mb-4" error={errors.location?.message}  />
   }/>
    <Controller
   name="Dob"
   control={control}
   rules={{
     required: { value: true, message: "Date of Birth is reqiured" }
   }}
   render={({field:{onChange,value}})=>
   <InputBox  value={value} type="date" onChange={onChange} placeholder={'Date of Birth'} label="Date of Birth" classname="w-full outline-none border-2 p-3 rounded mb-4" error={errors.Dob?.message}  />
   }/>
   <div className=" flex justify-end gap-3">
   <Button types='button' Name='Cancel' classname=' p-2 bg-gray-500 rounded text-white my-3' onClick={close}/>

    <Button types='submit' Name='Save' classname=' p-2 bg-blue-500 rounded text-white my-3'/>
  
   </div>
 </form>
)
}

export default Edit