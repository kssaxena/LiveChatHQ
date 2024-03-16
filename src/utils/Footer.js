import { Link } from "react-router-dom";

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
            <Link className="m-2 w-1/4 text-center text-lg">
              Terms Of Service
            </Link>
            <Link className="m-2 w-1/4 text-center text-lg">
              Privacy Policy
            </Link>
            <Link className="m-2 w-1/4 text-center text-lg">
              Community Policy
            </Link>
            <Link className="m-2 w-1/4 text-center text-lg">Refund Policy</Link>
          </div>
          <div className="h-full w-1/4 flex justify-center items-center">
            <h1>hello</h1>
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