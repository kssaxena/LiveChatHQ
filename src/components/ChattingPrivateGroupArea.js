import {
  ChevronsDown,
  HomeIcon,
  LogOutIcon,
  MessageSquareMore,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import ChattsSection from "./ChattsSection";
import FriendsSection from "./FriendsSection";
import Footer from "../utils/Footer";

const ChattingPrivateGroupArea = () => {
  return (
    <div className="bg-[#2E2F38] w-screen">
      <h1 className="bg-red-500 p-1  text-center text-white tracking-widest animate-pulse">
        All chats will disappear once Page is Refreshed..
      </h1>
      <div className=" border-[#2E2F38] border flex p-2 shadow-2xl">
        <div className="w-1/6 border-r border-red-500">
          <Link to="/home">
            <h1 className="text-red-500 text-center  font-semibold text-4xl hover:scale-110 duration-200 ease-in-out hover:shadow-2xl">
              LiveChat.HQ
            </h1>
          </Link>
        </div>
        <div className=" w-full flex">
          <div className="w-11/12">
            <h1 className="text-white text-3xl font-medium p-1 ml-10">
              New chat
            </h1>
          </div>
          <div className="flex p-2 justify-evenly items-center w-1/6 border-l border-red-500">
            <Link to="/home">
              <HomeIcon className="hover:text-red-500 duration-150 ease-in-out hover:scale-110 text-white" />
            </Link>
            <Link to={"/"}>
              <LogOutIcon className="hover:text-red-500 duration-150 ease-in-out hover:scale-110 text-white" />
            </Link>
          </div>
        </div>
      </div>
      <h1 className="mt-10 w-full text-center tracking-wider text-xl font-light text-white">
        Our Platform welcomes you to enjoy the chatting between strangers and
        making Friends
      </h1>
      <section className="flex">
        <div className="w-1/2 flex flex-col items-center m-10 mt-16 border-r border-red-500">
          <h1 className=" text-center text-6xl w-[100%] p-5 font-medium text-red-500 shadow-md m-5 rounded-2xl">
            Enter Private Chats
          </h1>
          <h1>
            <ChevronsDown className="h-14 w-14 m-10 animate-bounce shadow-sm shadow-black rounded-full" />
          </h1>
          <Link
            to="/PrivateChat"
            className="justify-center flex border-2 border-red-500 p-5 rounded-full hover:bg-red-500 duration-150 ease-in-out hover:scale-110 shadow-sm shadow-black "
          >
            <MessageSquareMore className="h-24 w-24" />
          </Link>
        </div>
        <div className="w-1/2 flex flex-col items-center m-10 mt-16 border-l border-red-500">
          <h1 className=" text-center text-6xl w-[100%] p-5 font-medium text-red-500 shadow-md m-5 rounded-2xl ">
            Enter Group Chats
          </h1>
          <h1>
            <ChevronsDown className="h-14 w-14 m-10 animate-bounce shadow-sm shadow-black rounded-full" />
          </h1>
          <Link
            to="/chattingArea"
            className="justify-center flex border-2 border-red-500 p-5 rounded-full hover:bg-red-500 duration-150 ease-in-out hover:scale-110 shadow-sm shadow-black "
          >
            <Users className="h-24 w-24" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ChattingPrivateGroupArea;
