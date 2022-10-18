import NavBar from "./NavBar"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChatNavBar from "./ChatNavBar";

function CreateChatroom() {
    const [servers, setServers] = useState([])
    const [chatrooms, setChatrooms] = useState([])
    const [chatroomName, setChatroomName] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();

    // this use effect is to get chatrooms
    useEffect(() => {
        fetch(`/api/servers/${id}`)
          .then((r) => r.json())
          .then((chatrooms) => {
            setChatrooms(chatrooms);
            console.log(chatrooms)
          });
      }, [id]);
   
    useEffect(() => {
        fetch("/api/servers")
          .then((response) => {
            if (response.ok) {
              response.json().then((servers) => setServers(servers));
            }
          });
      }, []);

      function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/chatrooms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: chatroomName,
            server_id: id
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((chatroom) => {
                setChatrooms([...chatrooms, chatroom])
                navigate(`/server/${id}/chatroom/${chatroom.id}`)
            });
          }
        });
      }

    return (
        <div>
            <NavBar servers={servers}/>
            <div className="body">
                <ChatNavBar server_id={id} chatrooms={chatrooms}/>
                <div className="bodyy">
                    Create a new chatroom!
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="chatroom_name">Chatroom name:</label>
                        <input
                        type="text"
                        id="chatroom_name"
                        value={chatroomName}
                        onChange={(e) => setChatroomName(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateChatroom