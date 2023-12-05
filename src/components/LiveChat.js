import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { FaUserCircle } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store?.chat?.messages);

  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      //  console.log("api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(8),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full h-[570px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse  ">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      {/* If you want to do something after hittting enter always use form */}
      <form
        className="w-full p-2 ml-2 border border-black flex pb-5 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On form submit", liveMessage);
          dispatch(addMessage({ name: "New User", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <div className="w-8">
          <FaUserCircle className="text-3xl" />
        </div>

        <div className="pl-2">
          <div className="font-semibold">New User</div>
          <input
            className="border border-black w-96 px-1"
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className=" px-2 py-1 mx-2 rounded-md">
            <IoSendSharp />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
