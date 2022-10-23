import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

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
                Create a new server!
                <form onSubmit={handleSubmit}>
                    <label htmlFor="server_name">Server Name:</label>
                    <input
                    type="text"
                    id="server_name"
                    value={serverName}
                    onChange={(e) => setServerName(e.target.value)}
                    />
                    {/* <label htmlFor="server_Img">Server Icon:</label>
                    <input
                    type="text"
                    id="server_Img"
                    value={serverImg}
                    onChange={(e) => setServerImg(e.target.value)}
                    /> */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default CreateServer