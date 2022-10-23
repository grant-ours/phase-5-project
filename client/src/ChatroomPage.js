import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatNavBar from "./ChatNavBar";
import { Input } from 'semantic-ui-react'

function ChatroomPage({ cable }) {
  const [servers, setServers] = useState([]);
  const [chatrooms, setChatrooms] = useState([]);
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState("");
  const { sid, cid } = useParams();

  // this use effect is to get chatrooms
  useEffect(() => {
    fetch(`/api/servers/${sid}`)
      .then((r) => r.json())
      .then((chatrooms) => {
        setChatrooms(chatrooms);
      });
  }, [sid]);

  useEffect(() => {
    fetch("/api/servers").then((response) => {
      if (response.ok) {
        response.json().then((servers) => setServers(servers));
      }
    });
  }, []);

  useEffect(() => {
    const c = cable.subscriptions.create(
      {
        channel: "ChatsChannel",
        chatroom_id: cid,
      },
      {
        received: (chats) => {
          setChats(chats);
        },
      }
    );
    return () => c.unsubscribe();
  }, [cable.subscriptions, cid]);

  // useEffect(() => {
  //   fetch(`/api/chatrooms/${cid}/chats`)
  //     .then((response) => {
  //       if (response.ok) {
  //         response.json().then((chats) => setChats(chats));
  //       }
  //     });
  // }, []);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/api/chatrooms/${cid}/chats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newChat,
      }),
    }).then((r) => {
      setNewChat("")
    });
  }

  //add new chat component to handle fetches for other data
  const chat = chats.map((chat) => {
    return (
    <div key={chat.id}>
        {chat.text}
    </div>
    )
  });

  return (
    <div>
      <NavBar servers={servers} />
      <div className="body">
        <ChatNavBar server_id={sid} chatrooms={chatrooms} />
        <div className="bodyy">
          Chatroom
          {chat}
          <form className="message-text" onSubmit={handleSubmit}>
            <Input
              type="text"
              id="new_chat"
              value={newChat}
              placeholder= "Message..."
              onChange={(e) => setNewChat(e.target.value)}
            />
            <button className="ui button" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ChatroomPage;
