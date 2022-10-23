import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function ListOfServers({ setServers, LoS }) {
  const [servers2, setServers2] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/api/all")
      .then((r) => r.json())
      .then((servers) => {
        setServers2(servers);
        console.log(servers);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    const sid = e.target.firstChild.childNodes[0].pathname.match(/(\d+)/)[0]
    fetch("/api/usersinservers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        server_id: sid
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((join) => {
            console.log(join)
            navigate(`/server/${sid}`)
            setServers([...LoS, server])
        });
      }
    });
  }

  const server = servers2.map((server) => {
    return (
        <form key={server.id} onSubmit={handleSubmit}>
            {/* <li> */}
                {server.name}
                <button className="ui button">Join?</button>
            {/* </li> */}
        </form>
    );
  });

  return (
    <div>
      Hello this is the List of Servers
      {server}
    </div>
  );
}
export default ListOfServers;
