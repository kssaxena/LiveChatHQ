import React, {  useState } from "react";
import { SendHorizontal } from "lucide-react";
import { useDispatch } from "react-redux";
import { addBotReply, addSearchMessage } from "../utils/searchSlice";

const InputBox = () => {
  const [searchMesg, setSearchMesg] = useState("");
  const dispatch = useDispatch();

  const handelInput = (e) => {
    setSearchMesg(e.target.value);
  };

  const handelSendMessage = () => {
    dispatch(addSearchMessage(searchMesg));
    dispatch(addBotReply("This is the Text You Entered: " + searchMesg));
    setSearchMesg("");
  };

  return (
    <div className="w-full mt-auto p-3  ">
      <form className=" flex" onSubmit={(e) => e.preventDefault()}>
        <input
          className=" text-black h-10 w-[90%] rounded-3xl mx-2 px-3"
          type="text"
          placeholder="Message Here"
          onChange={handelInput}
          value={searchMesg}
          onKeyPress={(e) => e.key === "Enter" && handelSendMessage}
        />
        <button
          className=" rounded-full hover:scale-110"
          onClick={handelSendMessage}
        >
          <SendHorizontal />
        </button>
      </form>
    </div>
  );
};

export default InputBox;
