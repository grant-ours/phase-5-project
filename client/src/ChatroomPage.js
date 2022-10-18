import NavBar from "./NavBar"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatNavBar from "./ChatNavBar";

function ChatroomPage() {
    const [servers, setServers] = useState([])
    const [chatrooms, setChatrooms] =useState([])
    const { sid, cid } = useParams();

    // this use effect is to get chatrooms
    useEffect(() => {
        fetch(`/api/servers/${sid}`)
          .then((r) => r.json())
          .then((chatrooms) => {
            setChatrooms(chatrooms);
            console.log(chatrooms)
          });
      }, [sid]);
   
    useEffect(() => {
        fetch("/api/servers")
          .then((response) => {
            if (response.ok) {
              response.json().then((servers) => setServers(servers));
            }
          });
      }, []);

    return (
        <div>
            <NavBar servers={servers}/>
            <div className="body">
                <ChatNavBar server_id={sid} chatrooms={chatrooms}/>
                <div className="bodyy">
                    Chatroom
                </div>
            </div>
        </div>
    )
}
export default ChatroomPage