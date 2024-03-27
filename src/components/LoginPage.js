import {
  MailIcon,
  User2,
  ChevronsLeftRight,
  KeySquare,
  GhostIcon,
} from "lucide-react";
import { Images } from "../utils/Images";
import { Link } from "react-router-dom";
import Footer from "../utils/Footer";

const LoginPage = () => {
  return (
    <div>
      <div className=" bg-gradient-to-b from-[#1C1938] to-gray-900 p-20">
        <section className="flex justify-center items-center">
          <div className="w-1/2 ">
            <Link to="/">
              <h1 className="text-center text-5xl flex justify-center items-center font-medium text-red-500 mb-10 ">
                LiveChat.HQ
              </h1>
            </Link>
          </div>
          <div className="w-1/2 ">
            <h1 className="text-center text-3xl flex justify-center items-center font-medium text-red-500 mb-10 ">
              Login Or Continue in Ghost
              <GhostIcon className="ml-2 mr-2 animate-bounce h-10 w-10" /> Mode
            </h1>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <div className="w-1/2 ">
            <img src={Images[5].url} />
          </div>
          <div className=" w-1/2 flex justify-center items-center ">
            <form className="w-full flex flex-col p-10 justify-center items-center">
              <label
                className="flex text-white text-sm font-normal p-1 text-left"
                htmlFor="name"
              >
                <User2 /> User Id
              </label>
              <input
                className="w-4/5 bg-gray-300 m-1 leading-tight focus:outline-none focus:shadow-outline p-5 rounded-2xl "
                id="name"
                type="name"
                placeholder="Enter your user ID"
              />
              <label
                className="flex w-1/6 text-white text-sm font-normal p-1"
                htmlFor="password "
              >
                <KeySquare /> Password
              </label>
              <input
                className="w-4/5 bg-gray-300 m-1 leading-tight focus:outline-none focus:shadow-outline p-5 rounded-2xl  "
                id="password"
                type="password"
                placeholder="Enter your Password"
              />
              <Link
                to="/home"
                className="text-white bg-red-500 w-1/3 m-5 p-3 rounded-xl hover:scale-110 duration-150 ease-in-out justify-center items-center "
              >
                <h1 className="text-xl text-black font-medium text-center">
                  Login
                </h1>
              </Link>
            </form>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <Link
            to="/ChattingArea"
            className="flex justify-center items-center text-white pl-20 pr-20 p-5 text-xl border-2 border-red-500 rounded-3xl hover:bg-red-500 duration-150 ease-in-out hover:scale-110 hover:font-semibold hover:text-black "
          >
            Ghost
            <GhostIcon className="ml-2 mr-2 animate-bounce h-10 w-10" />
            Mode
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
