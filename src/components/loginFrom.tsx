import InputBox from "../ui/inputBox"
import Button from "../ui/button"
import QuestionAnswerSharpIcon from '@mui/icons-material/QuestionAnswerSharp';
import { useForm ,Controller} from "react-hook-form";
export default function Login() {

  const { handleSubmit , control , formState:{errors} }=useForm({
    defaultValues:{
      username:'',
      password:''
    }
  })
const onSubmit=(data:{
  username:string,
  password:string
})=>{
console.log(data)
}
  return (
    <div className=" flex justify-center items-center h-screen bg-gray-300 ">
      <div className=" flex h-1/2 w-1/2 bg-white">
      <div className=" w-1/2 flex justify-center items-center text-5xl  bg-blue-400">
            <QuestionAnswerSharpIcon style={{fontSize:'100px'}}/>
        </div>
        <div className=" p-5 w-1/2 ">
        <h3 className=" text-3xl font-semibold mb-5">Login</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <Controller control={control} 
            rules={{
              required: { value: true, message: "Username is required" },
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
             
             
            }}
            name="username" render={({field:{onChange,value}})=>
            <InputBox value={value} onChange={onChange} label="" type="text"  placeholder={'userName or email'} classname=" outline-none border-2 w-full p-3 rounded" error={errors.username?.message}/>
            } />
          
          <Controller control={control}
          
          name="password" 
          rules={{
            required: { value: true, message: "Password is required" },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 20,
              message: "Password must be less than 20 characters",
            },
            pattern: {
              value:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
              message: "Password is invalid",
            },
          }}
          render={({field:{onChange,value}})=>
            <InputBox value={value} onChange={onChange} label="" type="password"  placeholder={'password'} classname=" w-full outline-none border-2 p-3 rounded" error={errors.password?.message}/>
            } />
            <Button Name={'login'} types="submit" classname=" w-1/2 rounded  mx-auto me-0 block  p-2 bg-blue-400" />
          </form>
        </div>
      </div>
    </div>
  )
}
