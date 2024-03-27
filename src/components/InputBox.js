import React, { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { useDispatch } from "react-redux";
import { addBotReply, addSearchMessage } from "../utils/searchSlice";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const InputBox = () => {
  const [searchMesg, setSearchMesg] = useState("");
  const [botMessage, setBotMessage] = useState("");
  const dispatch = useDispatch();

  const handelInput = (e) => {
    setSearchMesg(e.target.value);
  };

  // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);

  async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(searchMesg);
    const response = await result.response;
    const text = response.text();
    setBotMessage(text);
     console.log(text);
  }

  const handelSendMessage = async () => {
    dispatch(addSearchMessage(searchMesg));
    await run();
    dispatch(addBotReply(botMessage));
    setSearchMesg("");
  };

  return (
    <div className="w-full mt-auto p-3 bg-red-500 rounded-2xl">
      <form className=" flex" onSubmit={(e) => e.preventDefault()}>
        <input
          className="bg-red-50 text-black h-14 w-[90%] rounded-3xl mx-10 px-3"
          type="text"
          placeholder="Message Here"
          onChange={handelInput}
          value={searchMesg}
          onKeyPress={(e) => e.key === "Enter" && handelSendMessage}
        />
        <button
          className=" rounded-full hover:scale-110 hover:text-black"
          onClick={handelSendMessage}
        >
          <SendHorizontal />
        </button>
      </form>
    </div>
  );
};

export default InputBox;
