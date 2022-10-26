import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import CreateServer from "./CreateServer";
import ServerPage from "./ServerPage";
import ChatroomPage from "./ChatroomPage";
import CreateChatroom from "./CreateChatroom";
import LeaveServer from "./LeaveServer"
import actionCable from "actioncable";
import 'semantic-ui-css/semantic.min.css'

const CableApp = {};
CableApp.cable = actionCable.createConsumer("wss://grantsdiscord.herokuapp.com/api/cable");

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/create_server" element={<CreateServer />} />
      <Route path="/server/:id" element={<ServerPage />} />
      <Route path="/server/:id/create_chatroom" element={<CreateChatroom />} />
      <Route path="/server_leave/:id" element={<LeaveServer />} />
      <Route
        path="/server/:sid/chatroom/:cid"
        element={<ChatroomPage cable={CableApp.cable} />}
      />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
