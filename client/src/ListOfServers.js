import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from 'semantic-ui-react'

function ListOfServers({ setServers, LoS }) {
  const [servers2, setServers2] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/api/all")
      .then((r) => r.json())
      .then((servers) => {
        setServers2(servers);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    const sid = e.target.children[0].children[0].children[0].innerHTML.match(/(\d+)/)[0]
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
            <Card className="center">
                <Card.Content>
                    <Card.Header>{server.name} | Server #{server.id}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Button primary>
                        Join?
                    </Button>
                </Card.Content>
            </Card>
        </form>
    );
  });

  return (
    <div>
        <Card.Group centered>
            {server}
        </Card.Group>
    </div>
  );
}
export default ListOfServers;
