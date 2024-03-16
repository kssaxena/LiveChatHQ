import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#1C1938] flex justify-evenly items-center w-full h-16 p-10">
      <div className="text-white w-1/3">
        <nav className="flex justify-around">
          <Link
            to={"/"}
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 "
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 "
          >
            About
          </Link>
          <Link
            to="/contact"
            className=" font-light text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:text-red-500 "
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex items-center justify-center w-1/3">
        <button>
          <h1 className="text-red-500 text-center  font-semibold text-4xl">
            LiveChat.HQ
          </h1>
        </button>
      </div>
      <div className="flex w-1/3 justify-evenly items-center text-white">
        <div className="w-1/3 flex justify-between items-center">
          <button className="border-2 border-red-500 p-2 rounded-2xl hover:bg-red-500 duration-150 ease-in-out hover:scale-110 hover:text-black font-semibold ">Search</button>
          <button className="border-2 border-red-500 p-2 rounded-2xl hover:bg-red-500 duration-150 ease-in-out hover:scale-110 hover:text-black font-semibold ">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
