import { HomeIcon, LogOutIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ChattsSection from "./ChattsSection";
import FriendsSection from "./FriendsSection";
import Footer from "../utils/Footer";

const ChattingArea = () => {
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
              Group Chats
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
      <section className="flex text-white p-5">
        <div className="w-1/5 h-screen m-5">
          <FriendsSection />
        </div>
        <div className="w-4/5 h-screen mr-10">
          <ChattsSection />
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default ChattingArea;
