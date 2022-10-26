import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatNavBar from "./ChatNavBar";

function ServerPage() {
  const [servers, setServers] = useState([]);
  const [chatrooms, setChatrooms] = useState([]);
  const [currentServer, setCurrentServer] = useState({})
  const { id } = useParams();

  // this use effect is to get chatrooms
  useEffect(() => {
    fetch(`/api/servers/${id}`)
      .then((r) => r.json())
      .then((chatrooms) => {
        setChatrooms(chatrooms);
      });
  }, [id]);

  useEffect(() => {
    fetch("/api/servers").then((response) => {
      if (response.ok) {
        response.json().then((servers) => setServers(servers));
      }
    });
  }, []);

  useEffect(() => {
    fetch(`/api/showserver/${id}`)
      .then((response) => {
        if (response.ok) {
          response.json().then((currentServer) => setCurrentServer(currentServer));
        }
      });
  }, [id]);

  return (
    <div>
      <NavBar servers={servers} />
      <div className="body">
        <ChatNavBar chatrooms={chatrooms} server_id={id} />
        <div className="bodyy">
            <div className="container">
            <h1>Welcome to the {currentServer.name} Server!</h1>
            <h3>Feel free to select/create a chatroom and get chatting!</h3>
            
            </div>
        </div>
      </div>
    </div>
  );
}
export default ServerPage;
