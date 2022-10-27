import { Feed } from "semantic-ui-react";

export default function Chat({ text }) {
  return <Feed.Extra text>{text}</Feed.Extra>;
}
