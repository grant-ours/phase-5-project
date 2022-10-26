import "./NavStyle.css";
import { Link } from "react-router-dom";

function NavBar({ logout, servers }) {
  function handleClick(e) {
    fetch("/api/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        logout(null);
      }
    });
  }
  const server = servers.map((server) => {
    return (
      <li key={server.id}>
        <Link to={`/server/${server.id}`} server={server} >{server.name}</Link>
      </li>
    );
  });

  return (
    <nav className="navbar">
      <ul>
        <li>
            <Link to="/">List of All Servers</Link>
        </li>
        {server}
        <li>
          <Link to="/create_server">Create Server?</Link>
        </li>
        <li>
          <Link to="/" onClick={handleClick}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
