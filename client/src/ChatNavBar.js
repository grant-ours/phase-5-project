function ChatNavBar({ server_id, chatrooms }) {

    const chatroom = chatrooms.map((chatroom) => {
        return (
            <li><a href={`/server/${server_id}/chatroom/${chatroom.id}`}>{chatroom.name}</a></li>
        )
        
    })

    return (
        <ul>
            {chatroom}
            <li><a href={`/server/${server_id}/create_chatroom`}>Create Chatroom?</a></li>
        </ul>
    )
}

export default ChatNavBar


