import { Feed } from "semantic-ui-react";
import React, { useState } from "react";

export default function Chat({ text, created_at }) {
  const [displayDate, setDisplayDate] = useState(false);

  return (
    <div
      className="chat_hover"
      onMouseEnter={() => setDisplayDate(true)}
      onMouseLeave={() => setDisplayDate(false)}
    >
    <div style={{display : 'inline-block'}}><Feed.Extra text>{text}</Feed.Extra></div>
    <div style={{display : 'inline-block', marginLeft : '10px'}}> {displayDate ? <Feed.Date>{created_at}</Feed.Date> : null}</div>
     
    </div>
  );
}
