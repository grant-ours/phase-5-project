import { Link } from "react-router-dom";

function ChatNavBar({ server_id, chatrooms }) {
  const chatroom = chatrooms.map((chatroom) => {
    return (
      <li key={"chatroom" + chatroom.id}>
        <Link to={`/server/${server_id}/chatroom/${chatroom.id}`}>
          {chatroom.name}
        </Link>
      </li>
    );
  });

  return (
    <ul>
      {chatroom}
      <li>
        <Link to={`/server/${server_id}/create_chatroom`}>
          Create Chatroom?
        </Link>
      </li>
      <li>
        <Link to={`/server_leave/${server_id}`}>
          Leave Server?
        </Link>
      </li>
    </ul>
  );
}

export default ChatNavBar;
