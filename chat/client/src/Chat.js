import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import ChatBox from "./components/ChatBox";
import MessageForm from "./components/MessageForm";

import "./css/chat.css";
const Chat = () => {
    const [connectedSoket, setConnectedSoket] = useState();

    useEffect(() => {
        const soket = io();

        soket.on('connect', () => {
            setConnectedSoket(soket);
            console.log('conected!!!');
            console.log(soket);

            soket.on("sendAll", (messages) => {
                console.log('primit', messages);
            })
        });

    }, []);


    return (
        <div className="mainChat" >
            <h1>Chat</h1>
            <ChatBox />
            <MessageForm soket={connectedSoket} />
        </div >
    );
};

export default Chat;
