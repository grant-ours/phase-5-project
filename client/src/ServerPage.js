import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatNavBar from "./ChatNavBar";

function ServerPage() {
  const [servers, setServers] = useState([]);
  const [chatrooms, setChatrooms] = useState([]);
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
  return (
    <div>
      <NavBar servers={servers} />
      <div className="body">
        <ChatNavBar chatrooms={chatrooms} server_id={id} />
        <div className="bodyy">Server Page</div>
      </div>
    </div>
  );
}
export default ServerPage;
