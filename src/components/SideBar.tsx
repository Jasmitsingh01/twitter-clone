import QuestionAnswerSharpIcon from "@mui/icons-material/QuestionAnswerSharp";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className=" w-fit flex flex-col justify-between h-screen border-e-2 px-4 border-b-2  ">
      <div>
        <div className=" mb-2">
          <QuestionAnswerSharpIcon style={{fontSize:'50px',color:"rgb(59,130,246)"}} />
        </div>
        <div>
          <Link to={"/"} className="flex items-center gap-3  hover:bg-blue-300 text-lg font-semibold  p-3  rounded">
            <span>
              <HomeIcon />
            </span>
            <span>Home</span>
          </Link>
          <Link to={"/profile/:id"} className="flex items-center gap-3  font-semibold hover:bg-blue-300 rounded p-3   text-lg ">
            <span>
              <PersonIcon />
            </span>
            <span>Profile</span>
          </Link>

          <button onClick={() => {}} className="flex w-full items-center gap-3  font-semibold hover:bg-blue-300 rounded p-3   text-lg ">
            <span>
              <LogoutIcon />
            </span>
            <span>Logout</span>
          </button>
        </div>
      </div>
      <div className=" flex gap-4">
        <img
          src="/download.jpeg"
          alt="profile-img"
          className=" w-[50px] h-[50px] rounded-full  "
        />
        <div>
          <p>Name</p>
          <p>@username</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
