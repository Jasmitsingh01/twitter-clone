import InputBox from "../ui/inputBox";
import Button from "../ui/button";
import QuestionAnswerSharpIcon from "@mui/icons-material/QuestionAnswerSharp";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { register } from "../services/auth";
interface registerData {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

function RegisterForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data: registerData) => {
    delete data?.confirmPassword;
    console.log(data);
    register(data)
  };

  return (
    <div>
      <div className=" flex justify-center items-center h-screen bg-gray-300 ">
        <div className=" flex h-1/2 w-1/2 bg-white">
        <div className=" w-1/2 flex justify-center items-center text-5xl  bg-blue-400">
        <QuestionAnswerSharpIcon style={{fontSize:'100px'}}/>
        </div>
        <div className=" p-5 w-1/2 ">
          <h3 className=" text-3xl font-semibold mb-5"> Register</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <Controller
              name="username"
              control={control}
              rules={{
                required: { value: true, message: "Username is required" },
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
       
                pattern: {
                  value: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
                  message: "Username is invalid",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <InputBox
                  value={value}
                  classname=" outline-none border-2 w-full p-3 rounded"                  label={""}
                  placeholder={"Username"}
                  type={"text"}
                  error={errors.username?.message}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: { value: true, message: "Username is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <InputBox
                  value={value}
                  classname=" outline-none border-2 w-full p-3 rounded"                  label={""}
                  placeholder={"Email"}
                  type={"text"}
                  error={errors.email?.message}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
        
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
                  message: "Password is invalid",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <InputBox
                  value={value}
                  classname="  outline-none border-2 w-full p-3 rounded"                     label={""}
                  placeholder={"Password"}
                  type={"password"}
                  error={errors.password?.message}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 8,
                  message: " Confirm Password must be at least 8 characters",
                },
               
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
                  message: "Confirm Password is invalid",
                },
                validate: (value) =>
                  value === watch("password") || "The Confirm passwords do not match",
              }}
              render={({ field: { onChange, value } }) => (
                <InputBox
                  value={value}
                  classname=" outline-none border-2 w-full p-3 rounded"                     label={""}
                  placeholder={"Confirm Password"}
                  type={"password"}
                  error={errors.confirmPassword?.message}
                  onChange={onChange}
                />
              )}
            />

            <Button
              Name={"Register"}
              classname=" w-1/2 rounded  mx-auto me-0 block  p-2 bg-blue-400"              types="submit"
            />
          </form>
          <p className=" my-5">Already have a  account <Link to={'/login'} className=" text-blue-400">login !!</Link> </p>

        </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
