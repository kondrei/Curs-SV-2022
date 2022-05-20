import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import ChatBox from "./components/ChatBox";
import MessageForm from "./components/MessageForm";
import Notification from "./components/Notification";

import "./css/chat.css";
const Chat = () => {
    const [connectedSoket, setConnectedSoket] = useState();
    const [messages, setMessages] = useState();

    useEffect(() => {
        const soket = io();

        soket.on('connect', () => {
            setConnectedSoket(soket);
            soket.on("sendAll", (messages) => {
                setMessages(messages);
            });
        });

    }, []);
    return (
        <>
            <div className="mainChat" >
                <h1>Let's chat!</h1>
                {messages && <ChatBox chats={messages} />}
                <MessageForm soket={connectedSoket} />
            </div >
            {messages && <Notification user={messages[messages.length - 1].name} />}
        </>
    );
};

export default Chat;
