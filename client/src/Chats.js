import React from "react";
import Chat from "./Chat";

function Chats({ chats }) {
  const chatGroups = [];
  let lastUserId;
  chats.forEach((c) => {
    if (c.user_id == lastUserId) {
      chatGroups[chatGroups.length - 1].push(c);
    } else {
      chatGroups.push([c]);
    }
    lastUserId = c.user_id;
  });

  // const chatGroupElements = chatGroups.map(cg => {
  //     <ChatGroup chats={cg}/>
  // })
  const chat = chats.map((chat) => {
    return <Chat key={"chat" + chat.id} {...chat} />;
  });

  return <div>{chat}</div>;
}
export default Chats;
