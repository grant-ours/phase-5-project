import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./NavStyle.css"

function NavBar({ logout }) {
    const [servers, setServers] = useState([])

    useEffect(() => {
        fetch("/api/servers")
          .then((response) => {
            if (response.ok) {
              response.json().then((servers) => setServers(servers));
            }
          });
      }, []);

   
    function handleClick(e) {
        fetch("/logout", {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                logout(null);
            }
        });
    }
    const server = servers.map((server) => {
        console.log(server)
        return (
            <li><a href="">{server.name}</a></li>
        )
        
    })

    return (
    <nav className="navbar">
        <ul>
            {server}
            <li><a href="/create_server">Create Server?</a></li>
            <li><a href="/" onClick={handleClick}>Logout</a></li>
        </ul>
        {/* <Link to="/create_server">Create Server?</Link> */}
        {/* <button onClick={handleClick}>Logout</button> */}
        {/* <div className="link">
            <Link to="/">Friends</Link>
        </div>
        <div className="link">
            <Link to="/buy">Servers</Link>
        </div>
        <div className="link">
            <Link to="/sell">Sell</Link>
        </div> */}
    </nav>
    )
}

export default NavBar


