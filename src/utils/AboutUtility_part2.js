import {
  MessageSquareMore,
  Share2,
  ShieldHalf,
  User,
  Wallet,
  ZapIcon,
} from "lucide-react";
import AboutValueCard from "./AboutValueCard";

const AboutUtility_part2 = () => {
  return (
    <div className="bg-gray-900">
      {/* <h1>bg-gradient-to-b from-gray-900 to-black</h1> */}
      <div className="w-full flex text-white justify-center items-center pl-36 pr-36 pt-32 ">
        <AboutValueCard
          icon={<ZapIcon className="bg-red-500 rounded-full p-4 w-20 h-20" />}
          title={"Fast & Familiar"}
          description={
            "A fast and lightweight chat app, with a design similar to popular platforms like Discord."
          }
        />
        <AboutValueCard
          icon={<User className="bg-red-500 rounded-full p-4 w-20 h-20" />}
          title={"Add Friends"}
          description={
            "Expand your friendships and stay connected with strangers by sending and accepting friend requests."
          }
        />
        <AboutValueCard
          icon={<Wallet className="bg-red-500 rounded-full p-4 w-20 h-20" />}
          title={"Add Free"}
          description={
            "Chat without distractions in an ad-free zone! Enjoy uninterrupted conversations without annoying ads."
          }
        />
      </div>
      <div className=" w-full flex text-white justify-center items-center pr-36 pl-36 pb-36">
        <AboutValueCard
          icon={
            <ShieldHalf className="bg-red-500 rounded-full p-4 w-20 h-20" />
          }
          title={"Spam Protection"}
          description={
            "Are bots ruining your quest for love? We use AI and Bot Protection to get rid of robotic nonsense."
          }
        />
        <AboutValueCard
          icon={
            <MessageSquareMore className="bg-red-500 rounded-full p-4 w-20 h-20" />
          }
          title={"Chat History"}
          description={
            "Ever had a delightful chat and wished you could revisit it? Well we've got Chat History."
          }
        />
        <AboutValueCard
          icon={<Share2 className="bg-red-500 rounded-full p-4 w-20 h-20" />}
          title={"Media Sharing"}
          description={
            "With Premium you can share images with strangers, with their permission of course."
          }
        />
      </div>
    </div>
  );
};

export default AboutUtility_part2;
