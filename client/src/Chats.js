import React from "react";
import Chat from "./Chat";

function Chats({chats}){
    const chat = chats.map((chat) => {
        return (
            <Chat key={"chat" + chat.id}{...chat}/>
        )
    });

    return (
        <div>
            {chat}
        </div>
    )
}
export default Chats