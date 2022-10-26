import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatNavBar from "./ChatNavBar";
import { TextArea, Form, Button} from 'semantic-ui-react'
import Chats from "./Chats.js"

function ChatroomPage({ cable }) {
  const [servers, setServers] = useState([]);
  const [chatrooms, setChatrooms] = useState([]);
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState("");
  const [currentChatroom, setCurrentChatroom] = useState({})
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
    fetch(`/api/chatrooms/${cid}`).then((response) => {
      if (response.ok) {
        response.json().then((chatroom) => setCurrentChatroom(chatroom));
      }
    });
  }, [cid]);

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

  return (
    <div>
      <NavBar servers={servers} />
      <div className="body">
        <ChatNavBar server_id={sid} chatrooms={chatrooms} />
        <div className="bodyy">
          <h1 className="center">{currentChatroom.name} Chatroom</h1>
          <Chats chats={chats}/>
          <div className="message-text">
          <Form onSubmit={handleSubmit}>
            <TextArea
              type="text"
              id="new_chat"
              value={newChat}
              placeholder= "Message..."
              onChange={(e) => setNewChat(e.target.value)}
            />
            <Button primary type="submit">Send</Button>
          </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatroomPage;
