import { ChevronLast } from "lucide-react";

const AboutUtility_part1 = () =>{
    return (
      <div className=" flex justify-center items-center bg-gradient-to-b from-[#1C1938] to-gray-900 ">
        
        <div className=" w-3/4 p-10">
          <div className=" justify-center items-center w-full flex flex-col">
            <h1 className="text-6xl p-5 font-semibold text-justify w-full text-red-500">
              LiveChatHQ
            </h1>
            <h1 className="text-4xl p-5 font-semibold text-center text-white">
              The best Site to Chat with Strangers or Friends..
            </h1>
          </div>
          <div>
            <p className="text-center text-xl text-white font-light tracking-wider">
              Many available chat apps offer various features for meeting random
              strangers or chatting without bots, but not all of them are
              modern, secure and feature rich with a diverse interesting people
              from around the world.
            </p>
          </div>
        </div>
      </div>
    );
};

export default AboutUtility_part1;