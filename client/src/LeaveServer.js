import React, {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";

function LeaveServer() {
    const [servers, setServers] = useState([])
    const { id } = useParams();
    const [currentServer, setCurrentServer] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/servers")
          .then((response) => {
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
      }, []);

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/api/usersinservers/${id}`, {
        method: "DELETE",
         }).then((r) => {
         if (r.ok) {
              navigate('/')
         }
         });
       }

    return (
        <div>
            <NavBar servers={servers}/>
            <div className="body">
                <form onSubmit={handleSubmit}>
                    {`Are you sure you want to leave ${currentServer.name}?`}
                    <button type="submit">Yes!</button>
                </form>
            </div>
        </div>
    )
}
export default LeaveServer