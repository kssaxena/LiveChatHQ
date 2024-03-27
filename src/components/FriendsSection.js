import { Circle, GroupIcon, User2Icon } from "lucide-react";

const FriendsSection = () => {

    const Friends = ({name, relation}) =>{
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
            <div><Circle className="bg-green-600 text-green-600 rounded-full mr-5 animate-pulse"/></div>
          </div>
        );
    };


  return (
    <div className="border border-[#2e2f38] shadow-xl shadow-black p-1 h-fit rounded-2xl">
      <div className=" flex justify-evenly items-center border border-[#2E2F38] ">
        <h1 className="p-3 border border-[#2E2F38] w-full text-center bg-[#0b0b0d] m-1 rounded-2xl">
          Group Members
        </h1>
      </div>
      <div>
        <Friends
        name={"Kshitij"}
        relation={"Friends"}/>
        <Friends
        name={"Saxena"}
        relation={"Anonymous"}/>
        <Friends
        name={"Kshitij"}
        relation={"Friends"}/>
        <Friends
        name={"User"}
        relation={"Anonymous"}/>
        {/* <Friends
        name={"Kshitij"}
        relation={"Friends"}/> */}
      </div>
    </div>
  );
};

export default FriendsSection;
