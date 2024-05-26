import  Button  from "../ui/button"


function Profile() {
  return (
    <div className=" p-3">
        <h3 className=" text-2xl font-semibold mb-3">Profile</h3>
        <div className="flex relative px-5 bg-blue-500 h-[200px] items-center justify-between mb-[60px]">
            <img src="/download.jpeg"  className=" w-[100px] h-[100px] absolute bottom-[-30px] rounded-full" />
            <div className=" absolute bottom-[-80px]  h-[100px] w-full flex items-center justify-end px-10">
                <Button classname=" text-blue-500 p-3   font-semibold border-blue-500 border-2 me-3 " types="button" Name=" upload Profile Image" />
                <Button classname=" text-gray-500 p-3   font-semibold border-gray-500 border-2 " types="button" Name=" Edit" />

            </div>
        </div>
        <div>
            <p className=" text-3xl font-semibold">Name</p>
            <p className="mb-5">@username</p>

        </div>
    </div>
  )
}

export default Profile