import InputBox from "../ui/inputBox";
import Button from "../ui/button";
import QuestionAnswerSharpIcon from "@mui/icons-material/QuestionAnswerSharp";
import { useForm, Controller } from "react-hook-form";

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
  };

  return (
    <div>
      <div className=" flex ">
        <div className="">
          <QuestionAnswerSharpIcon />
        </div>
        <div>
          <h3>Register</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
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
                pattern: {
                  value: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
                  message: "Username is invalid",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <InputBox
                  value={value}
                  classname={"p-3 rounded "}
                  label={""}
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
                  classname={"p-3 rounded "}
                  label={""}
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
              render={({ field: { onChange, value } }) => (
                <InputBox
                  value={value}
                  classname={"p-3 rounded "}
                  label={""}
                  placeholder={"Password"}
                  type={"text"}
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
                validate: (value) =>
                  value === watch("password") || "The passwords do not match",
              }}
              render={({ field: { onChange, value } }) => (
                <InputBox
                  value={value}
                  classname={"p-3 rounded "}
                  label={""}
                  placeholder={"Confirm Password"}
                  type={"text"}
                  error={errors.confirmPassword?.message}
                  onChange={onChange}
                />
              )}
            />

            <Button
              Name={"Register"}
              classname=" p-2 bg-blue-400"
              types="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
