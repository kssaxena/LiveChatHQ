import { Circle, GroupIcon, User2Icon } from "lucide-react";

const PrivateFriendsSection = () => {
  const Friends = ({ name, relation }) => {
    return (
      <div className="flex justify-center items-center rounded-2xl border border-[#2E2F38] shadow-sm shadow-black hover:scale-105 duration-150 ease-in-out h-24 m-2">
        <div className="w-1/4 flex justify-center items-center m-5">
          <User2Icon className="bg-red-500 text-xl w-14 h-14 rounded-full" />
        </div>
        <div className="w-3/4">
          <div>
            <h1 className="text-2xl">{name}</h1>
          </div>
          <div>
            <h1 className="text-base font-light">{relation}</h1>
          </div>
        </div>
        <div>
          <Circle className="bg-green-600 text-green-600 rounded-full mr-5 animate-pulse" />
        </div>
      </div>
    );
  };
  const FriendRequests = ({ name, accept, decline }) => {
    return (
      <div className="flex justify-center items-center rounded-2xl border border-[#2E2F38] shadow-sm shadow-black hover:scale-105 duration-150 ease-in-out h-24 m-2">
        <div className="w-1/4 flex justify-center items-center m-5">
          <User2Icon className="bg-red-500 text-xl w-14 h-14 rounded-full" />
        </div>
        <div className="w-3/4">
          <div>
            <h1 className="text-2xl">{name}</h1>
          </div>
          <div className="flex ">
            <h1 className="rounded-2xl animate-pulse font-light bg-red-500 text-center text-lg p-2 m-1 cursor-pointer hover:text-xl hover:scale-110 duration-200 ease-in-out">
              {accept}
            </h1>
            <h1 className="rounded-2xl  font-light bg-red-500 text-center text-lg p-2 m-1 cursor-pointer hover:text-xl hover:scale-110 duration-200 ease-in-out">
              {decline}
            </h1>
          </div>
        </div>
        <div>
          <Circle className="bg-green-600 text-green-600 rounded-full mr-5 animate-pulse" />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="border border-[#2e2f38] shadow-xl shadow-black p-1 h-fit rounded-2xl">
        <div className=" flex justify-evenly items-center border border-[#2E2F38] ">
          <h1 className="p-3 border border-[#2E2F38] w-full text-center bg-[#0b0b0d] m-1 rounded-2xl">
            Friends
          </h1>
        </div>
        <div>
          <Friends name={"Kshitij"} relation={"Friends"} />
          <Friends name={"User"} relation={"Friends"} />
          {/* <Friends name={"Saxena"} relation={"Anonymous"} />
        <Friends name={"Kshitij"} relation={"Friends"} /> */}
          {/* <Friends
        name={"Kshitij"}
        relation={"Friends"}/> */}
        </div>
      </div>
      <div className="border border-[#2e2f38] shadow-xl shadow-black p-1 h-fit rounded-2xl mt-10">
        <div className=" flex justify-evenly items-center border border-[#2E2F38] ">
          <h1 className="p-3 border border-[#2E2F38] w-full text-center bg-[#0b0b0d] m-1 rounded-2xl animate-pulse">
            Friend Requests
          </h1>
        </div>
        <div>
          <FriendRequests name={"User"} decline={"Decline"} accept={"Accept"} />
          <FriendRequests name={"User"} decline={"Decline"} accept={"Accept"} />
          {/* <Friends name={"Saxena"} relation={"Anonymous"} />
        <Friends name={"Kshitij"} relation={"Friends"} /> */}
          {/* <Friends
        name={"Kshitij"}
        relation={"Friends"}/> */}
        </div>
      </div>
    </div>
  );
};

export default PrivateFriendsSection;
