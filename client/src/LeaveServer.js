import React, {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import {Form, Button} from "semantic-ui-react"

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
      }, [id]);

    function handleClick(e) {
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
                <div className="container">
                <Form>
                    <h1>{`Are you sure you want to leave the ${currentServer.name} server?`}</h1>
                </Form>
                <Button primary onClick={handleClick}>Yes!</Button>
                </div>
            </div>
        </div>
    )
}
export default LeaveServer