import { Link } from "react-router-dom";
import { Facebook, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-evenly items-center h-32 bg-black text-white">
        <div className="h-full w-1/4 flex justify-center items-center">
          <Link to={"/"}>
            <h1 className="text-red-500 text-center  font-semibold text-4xl">
              LiveChat.HQ
            </h1>
          </Link>
        </div>
        <div className="h-full w-1/2 flex justify-center items-center">
          <Link
            to="/FooterAllComponents"
            className="m-2 w-1/4 text-center text-lg"
          >
            Terms Of Service
          </Link>
          <Link
            to="/FooterAllComponents"
            className="m-2 w-1/4 text-center text-lg"
          >
            Privacy Policy
          </Link>
          <Link
            to="/FooterAllComponents"
            className="m-2 w-1/4 text-center text-lg"
          >
            Community Policy
          </Link>
          <Link
            to="/FooterAllComponents"
            className="m-2 w-1/4 text-center text-lg"
          >
            Refund Policy
          </Link>
        </div>
        <div className="h-full w-1/4 flex justify-center items-center">
          <Link to="/FooterAllComponents" className="hover:bg-red-500 duration-150 ease-in-out p-4 rounded-full m-2">
            <Instagram />
          </Link>
          <Link to="/FooterAllComponents" className="hover:bg-red-500 duration-150 ease-in-out p-4 rounded-full m-2">
            <Facebook />
          </Link>
          <Link to="/FooterAllComponents" className="hover:bg-red-500 duration-150 ease-in-out p-4 rounded-full m-2">
            <Github />
          </Link>
        </div>
      </footer>
      <footer className="text-white">
        <h1 className="text-center border-t border-gray-200 bg-black text-sm p-2">
          All Rights Reserved
        </h1>
      </footer>
    </div>
  );
};

export default Footer;
