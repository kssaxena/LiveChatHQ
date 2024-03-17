import { Circle, Images, SearchIcon, Send, User2Icon } from "lucide-react";

const ChattsSection = () => {
  return (
    <div className="bg-black w-full h-3/4 flex shadow-2xl m-5 p-5 rounded-2xl">
      <div className="w-4/5 bg-[#2E2F38] m-2 rounded-lg">
        <div className="h-[90%] flex justify-center items-center overflow-hidden">
          <div className="w-fit h-fit p-10 rounded-2xl flex justify-center items-center overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <h1 className="w-fit text-9xl">
              Say Hii...
            </h1>
          </div>
        </div>
        <div className="w-full h-[10%] flex justify-center items-center rounded-2xl border border-[#2E2F38] shadow-sm shadow-black">
          <label
            className="flex w-1/6 text-black justify-center text-sm font-normal p-1"
            htmlFor="text"
          >
            <Images />
          </label>
          <input
            className="w-full bg-[#1C1938] m-1 leading-tight focus:outline-none focus:shadow-outline p-3 rounded-2xl "
            id="text"
            type="text"
            placeholder="Message"
          />
          <Send className="m-6" />
        </div>
      </div>
      <section className="profile_card w-1/5 flex flex-col bg-[#2E2F38] m-2 rounded-lg">
        <div>
          <div className=" flex justify-center items-center p-10">
            <User2Icon className="h-32 w-32 bg-red-500 p-5 rounded-full" />
          </div>
          <div className="border-t border-red-500 m-2 p-5 flex flex-col justify-center items-center">
            <h1 className="text-4xl">Kshitij</h1>
            <h1 className="text-center  w-full text-green-600">Friends</h1>
            <h1 className=" w-full flex justify-around mt-10">
              Status :
              <Circle className="bg-green-600 rounded-full text-green-600" />
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChattsSection;
