import {useState, useEffect } from "react";
import { Feed, Divider } from 'semantic-ui-react'



export default function Chat({created_at, text, id, user_id}) {
    const [user, setUser] = useState({})

    useEffect(()=> {
        fetch(`/api/users/${user_id}`)
        .then((r) => r.json())
        .then((user) => {
            setUser(user)
        })
    }, [user_id])

  return (
    <div className="chat_hover">
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              {user.username}
              <Feed.Date>{created_at}</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>{text}</Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      </Feed>
      <Divider />
    </div>
  );
}
