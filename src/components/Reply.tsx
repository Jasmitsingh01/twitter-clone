import Button from "../ui/button";
import { useForm, Controller } from "react-hook-form";
function Reply({ close }: { close: () => void }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      content: "",
    },
  });
  const onSubmit = (data: { content: string }) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-1/2  px-4  bg-white">
      <div className=" flex  justify-between p-2">
        <h3 className=" font-semibold text-lg">Tweet your Reply</h3>
        <Button
          Name="X"
          types="button"
          classname=" border-2 bg-gray-300 text-white px-5 w-[50px] font-semibold rounded h-[50px]"
          onClick={close}
        />
      </div>
      <div>
        <Controller
          name="content"
          rules={{
            required: { value: true, message: "Content is required" },
          }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <textarea
              value={value}
              onChange={onChange}
              rows={10}
              cols={30}
              className=" w-full outline-none  border-2 p-2"
            />
          )}
        />
        <div className="text-red-500 font-semibold my-2">
          {errors.content?.message}
        </div>
        <div className=" flex justify-end p-3 gap-3 border-t-2">
          <Button
            Name="Back"
            types="button"
            classname=" p-2  bg-gray-300  rounded-md  text-white"
            onClick={close}
          />
          <Button
            Name={"Create"}
            types="submit"
            classname=" p-2 bg-blue-400 rounded-md text-white"
          />
        </div>
      </div>
    </form>
  );
}

export default Reply;
