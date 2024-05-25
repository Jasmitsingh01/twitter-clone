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
    <div className=" flex ">
        <div className=" bg-blue-400">
            <QuestionAnswerSharpIcon/>
        </div>
        <div>
        <h3>Login</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller control={control} 
            rules={{
              required: { value: true, message: "Username is required" },
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
              maxLength: {
                value: 10,
                message: "Username must be less than 10 characters",
              },
             
            }}
            name="username" render={({field:{onChange,value}})=>
            <InputBox value={value} onChange={onChange} label="" type="text"  placeholder={'userName or email'} classname=" p-3 rounded" error={errors.username?.message}/>
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
            <InputBox value={value} onChange={onChange} label="" type="password"  placeholder={'password'} classname=" p-3 rounded" error={errors.password?.message}/>
            } />
            <Button Name={'login'} types="submit" classname=" p-2 bg-blue-400" />
          </form>
        </div>
    </div>
  )
}
