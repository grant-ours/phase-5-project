import NavBar from "./NavBar"
import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import ChatNavBar from "./ChatNavBar";
import {Form, Button} from "semantic-ui-react"

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

      function handleClick(e) {
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
                    <div className="container">
                    <h1>Create a New Chatroom!</h1>
                    <Form>
                        <Form.Field>
                        <label htmlFor="chatroom_name">Chatroom name:</label>
                        <input
                        type="text"
                        id="chatroom_name"
                        value={chatroomName}
                        onChange={(e) => setChatroomName(e.target.value)}
                        />
                        </Form.Field>
                        <Button primary onClick={handleClick}>Create!</Button>
                    </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateChatroom