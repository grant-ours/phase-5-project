import "./NavStyle.css"

function NavBar({ logout, servers }) {
   
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
        return (
            <li><a href={`/server/${server.id}`}>{server.name}</a></li>
        )
        
    })

    return (
    <nav className="navbar">
        <ul>
            {server}
            <li><a href="/create_server">Create Server?</a></li>
            <li><a href="/" onClick={handleClick}>Logout</a></li>
        </ul>
    </nav>
    )
}

export default NavBar


