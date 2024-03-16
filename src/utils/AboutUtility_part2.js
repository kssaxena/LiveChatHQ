import { MessageSquareMore, Share2, ShieldHalf, User, Wallet, ZapIcon } from "lucide-react";

const AboutUtility_part2 = () => {
  return (
    <div className="bg-gray-900">
      {/* <h1>bg-gradient-to-b from-gray-900 to-black</h1> */}
      <div className="w-full flex text-white justify-center items-center p-36">
        <div className="w-1/3 flex flex-col justify-center items-center border border-[#1C1938] rounded-3xl m-3 p-10 shadow-xl hover:shadow-2xl duration-150 ease-in-out hover:scale-105 hover:shadow-black ">
          <h1>
            <ZapIcon className="bg-red-500 rounded-full p-4 w-20 h-20" />
          </h1>
          <h1 className="text-4xl m-2">Fast & Familiar </h1>
          <p className="text-lg font-light m-2 text-center">
            A fast and lightweight chat app, with a design similar to popular
            platforms like Discord.
          </p>
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center border border-[#1C1938] rounded-3xl m-3 p-10 shadow-xl hover:shadow-2xl duration-150 ease-in-out hover:scale-105 hover:shadow-black">
          <h1>
            <User className="bg-red-500 rounded-full p-4 w-20 h-20" />
          </h1>
          <h1 className="text-4xl m-2">Add Friends </h1>
          <p className="text-lg font-light m-2 text-center">
            A fast and lightweight chat app, with a design similar to popular
            platforms like Discord.
          </p>
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center border border-[#1C1938] rounded-3xl m-3 p-10 shadow-xl hover:shadow-2xl duration-150 ease-in-out hover:scale-105 hover:shadow-black">
          <h1>
            <Wallet className="bg-red-500 rounded-full p-4 w-20 h-20" />
          </h1>
          <h1 className="text-4xl m-2">Add Free </h1>
          <p className="text-lg font-light m-2 text-center">
            A fast and lightweight chat app, with a design similar to popular
            platforms like Discord.
          </p>
        </div>
      </div>
      <div className="w-full flex text-white justify-center items-center pr-36 pl-36 pb-36">
        <div className="w-1/3 flex flex-col justify-center items-center border border-[#1C1938] rounded-3xl m-3 p-10 shadow-xl hover:shadow-2xl duration-150 ease-in-out hover:scale-105 hover:shadow-black">
          <h1>
            <ShieldHalf className="bg-red-500 rounded-full p-4 w-20 h-20" />
          </h1>
          <h1 className="text-4xl m-2">Spam Protection </h1>
          <p className="text-lg font-light m-2 text-center">
            A fast and lightweight chat app, with a design similar to popular
            platforms like Discord.
          </p>
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center border border-[#1C1938] rounded-3xl m-3 p-10 shadow-xl hover:shadow-2xl duration-150 ease-in-out hover:scale-105 hover:shadow-black">
          <h1>
            <MessageSquareMore className="bg-red-500 rounded-full p-4 w-20 h-20" />
          </h1>
          <h1 className="text-4xl m-2">Chat History</h1>
          <p className="text-lg font-light m-2 text-center">
            A fast and lightweight chat app, with a design similar to popular
            platforms like Discord.
          </p>
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center border border-[#1C1938] rounded-3xl m-3 p-10 shadow-xl hover:shadow-2xl duration-150 ease-in-out hover:scale-105 hover:shadow-black">
          <h1>
            <Share2 className="bg-red-500 rounded-full p-4 w-20 h-20" />
          </h1>
          <h1 className="text-4xl m-2">Media Sharing</h1>
          <p className="text-lg font-light m-2 text-center">
            A fast and lightweight chat app, with a design similar to popular
            platforms like Discord.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUtility_part2;
