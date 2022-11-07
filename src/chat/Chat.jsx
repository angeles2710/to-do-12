import React from "react";
import SocketProvider from "./SocketProvider";
import ChatRoom from "./ChatRoom";

export default function Chat() {
  return (
    <>
      <h1>Chat</h1>
      <hr />

      <SocketProvider>
        <ChatRoom />
      </SocketProvider>
    </>
  );
}
