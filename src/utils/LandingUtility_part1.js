import { GhostIcon, LogInIcon } from "lucide-react";
import { Images } from "./Images";
import { Link } from "react-router-dom";

const LandingUtility_part1 = () =>{
    return (
      <div className="flex justify-center items-center bg-gradient-to-b from-[#1C1938] to-gray-900">
        <div className="flex justify-center items-center w-1/3">
          <img src={Images[0].url} />
        </div>
        <div className="w-1/3 text-white flex flex-col items-center justify-center pt-40 pb-48">
          <h1 className="tracking-wider text-center text-5xl drop-shadow-2xl">
            Talk to Strangers<br></br>or<br></br> Make Friends
          </h1>
          <p className="w-full tracking-wider text-center mt-10">
            Experience an exciting free random chat alternative to find friends,
            connect with strangers, and talk with different people in random
            anonymous chat rooms. No registration required.
          </p>
          <div className="w-full mt-5 justify-center items-center flex ">
            <Link
              to="/loginpage"
              className="border-2 border-red-500 p-5 w-full tracking-widest hover:bg-red-500 duration-200 ease-in-out text-2xl rounded-xl hover:rounded-2xl hover:scale-110 drop-shadow-xl justify-center items-center flex "
            >
              <LogInIcon className="text-5xl mr-5" />
              <h1>Login To Continue</h1>
            </Link>
          </div>
          <div className="w-full mt-10 justify-center items-center flex ">
            <Link
              to="/ChattingPrivateGroupArea"
              className="border-2 border-red-500 p-5 w-full tracking-widest hover:bg-red-500 duration-200 ease-in-out text-2xl rounded-xl hover:rounded-2xl hover:scale-110 drop-shadow-xl justify-center items-center flex "
            >
              <h1>Continue in Ghost Mode</h1>
              <GhostIcon className="text-5xl ml-5 animate-bounce" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/3">
          <img src={Images[1].url} />
        </div>
      </div>
    );
};

export default LandingUtility_part1;