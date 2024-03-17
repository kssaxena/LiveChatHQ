import {
  Contact,
  HomeIcon,
  ListCollapse,
  LogOutIcon,
  SearchIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const HeaderAfterLogin = () => {
  return (
    <div className="bg-[#1C1938] flex justify-evenly items-center w-full h-16 p-10">
      <div className="text-white w-1/3">
        <nav className="flex justify-around">
          <Link
            to="/home"
            className="flex justify-center items-center font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 "
          >
            <HomeIcon className="m-1" />
            Home
          </Link>
          <Link
            to="/about"
            className="flex justify-center items-center font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 "
          >
            <ListCollapse className="m-1" />
            About
          </Link>
          <Link
            to="/contact"
            className="flex justify-center items-center font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 "
          >
            <Contact className="m-1" />
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex items-center justify-center w-1/3">
        <Link to="/home">
          <h1 className="text-red-500 text-center  font-semibold text-4xl hover:scale-110 duration-200 ease-in-out hover:shadow-2xl">
            LiveChat.HQ
          </h1>
        </Link>
      </div>
      <div className="flex w-1/3 justify-center items-center text-white ">
        <div className="w-5/6 flex bg-red-500 justify-center items-center rounded-2xl mr-10 hover:scale-110 duration-150 ease-in-out
          hover:shadow-2xl">
          <label
            className="flex w-1/6 text-black justify-center text-sm font-normal p-1"
            htmlFor="text"
          >
            <SearchIcon />
          </label>
          <input
            className="w-full bg-[#1C1938] m-1 leading-tight focus:outline-none focus:shadow-outline p-5 rounded-2xl "
            id="text"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="w-1/6">
        <Link to={"/"} className="w-full border-2 border-red-500 p-2 rounded-2xl hover:bg-red-500 duration-150 ease-in-out hover:scale-110 hover:text-black font-semibold flex justify-center items-center">
            <LogOutIcon className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderAfterLogin;
