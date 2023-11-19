import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

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
    <div>
      <div className="w-full h-[570px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse  ">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      {/* If you want to do something after hittting enter always use form */}
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On form submit", liveMessage);
          dispatch(addMessage({ name: "Hrushikesh", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="border border-black w-96 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className=" px-2 py-1 mx-2 text-white  bg-green-700 rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
