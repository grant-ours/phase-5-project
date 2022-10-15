import React, {useState} from "react"
import NavBar from "./NavBar";
import "./CreateServer.css"

function CreateServer() {
    const [serverName, setServerName] = useState("")
    const [serverImg, setServerImg] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/servers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: serverName,
            img: serverImg
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => console.log(user));
          }
        });
      }

    return (
        <div>
            <NavBar />
            <div className="create-server">
                Create a new server!
                <form onSubmit={handleSubmit}>
                    <label htmlFor="server_name">Server Name:</label>
                    <input
                    type="text"
                    id="server_name"
                    value={serverName}
                    onChange={(e) => setServerName(e.target.value)}
                    />
                    <label htmlFor="server_Img">Server Icon:</label>
                    <input
                    type="text"
                    id="server_Img"
                    value={serverImg}
                    onChange={(e) => setServerImg(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default CreateServer