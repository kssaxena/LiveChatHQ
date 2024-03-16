import { ChevronsLeftRight, MailIcon, User2 } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-b from-[#1C1938] to-black flex justify-center items-center">
      <div className=" w-1/2">
        <form className="w-full flex flex-col p-10">
          <label
            className="flex w-1/6 text-white text-sm font-normal p-1"
            htmlFor="name"
          >
            <User2 /> User Id
          </label>
          <input
            className="w-1/2 bg-gray-300 m-1 leading-tight focus:outline-none focus:shadow-outline p-5 rounded-2xl "
            id="name"
            type="name"
            placeholder="Enter your user ID"
          />
          <label
            className="flex w-1/6 text-white text-sm font-normal p-1"
            htmlFor="email"
          >
            <MailIcon /> Mail Id
          </label>
          <input
            className="w-1/2 bg-gray-300 m-1 leading-tight focus:outline-none focus:shadow-outline p-5 rounded-2xl  "
            id="email"
            type="email"
            placeholder="Enter your email address"
          />
          <label
            className="flex w-1/6 text-white text-sm font-normal p-1 "
            htmlFor="text"
          >
            <ChevronsLeftRight />
            Description
          </label>
          <input
            className="w-3/4 bg-gray-300 border border-[#1C1938] m-1 leading-loose focus:outline-none focus:shadow-outline p-5 rounded-2xl h-64 "
            id="text"
            type="text"
            placeholder="Description"
          />
          <button className="text-white bg-red-500 w-1/3 m-5 p-3 rounded-xl hover:scale-110 duration-150 ease-in-out ">
            <h1 className="text-lg text-black">Send</h1>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
