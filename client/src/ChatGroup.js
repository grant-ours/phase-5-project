import { Feed, Divider } from "semantic-ui-react";
import Chat from "./Chat";
import React, { useState, useEffect } from "react";

function ChatGroup({ chats }) {
  const [user, setUser] = useState({});
  const [user_id, setUser_id] = useState("");
  const [created_at, setCreated_at] = useState("");

  useEffect(() => {
    if (user_id !== "")
      fetch(`/api/users/${user_id}`)
        .then((r) => r.json())
        .then((user) => {
          setUser(user);
        });
  }, [user_id]);
  if (created_at !== chats[0].created_at) {
    setCreated_at(chats[0].created_at);
  }
  if (user_id !== chats[0].user_id) {
    setUser_id(chats[0].user_id);
  }

  const chat = chats.map((chat) => {
    return <Chat key={"chat" + chat.id} {...chat} />;
  });
  return (
    <div>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              {user.username}
              <Feed.Date>{created_at}</Feed.Date>
            </Feed.Summary>
            {chat}
          </Feed.Content>
        </Feed.Event>
      </Feed>
      <Divider />
    </div>
  );
}
export default ChatGroup;
