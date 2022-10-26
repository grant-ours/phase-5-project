import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { Form, Button } from "semantic-ui-react"

function CreateServer() {
    const [serverName, setServerName] = useState("")
    const [servers, setServers] = useState([])
    const navigate = useNavigate();

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
        fetch("/api/servers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: serverName
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((server) => {
                setServers([...servers, server])
                navigate(`/server/${server.id}`)
            });
          }
        });
      }

    return (
        <div>
            <NavBar servers={servers}/>
            <div className="body">
                <div className="container">
                <h1>Create a New Server!</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                    <label htmlFor="server_name">Server Name:</label>
                    <input
                    type="text"
                    id="server_name"
                    value={serverName}
                    onChange={(e) => setServerName(e.target.value)}
                    />
                    </Form.Field>
                    <Button primary type="submit">Create!</Button>
                </Form>
                </div>
            </div>
        </div>
    )
}
export default CreateServer