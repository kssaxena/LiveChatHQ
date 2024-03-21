import React from "react";
import { useSelector } from "react-redux";

const Chats = () => {
  const searchMessage = useSelector((store) => store.search.searchMessage);

  if (!searchMessage) return;

  return (
    <div className="flex flex-col gap-2 w-full ">
      {searchMessage.map((query, index) => {
        return (
          <div
            key={index}
            className={`flex h-10 ${
              query.userType === "user"
                ? "justify-end mr-10"
                : "justify-start ml-10"
            }`}
          >
            {/* {console.log({ query })} */}
            <div className="border p-2 rounded-lg text-lg">{query.message}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
