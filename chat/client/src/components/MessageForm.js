import { useState } from "react";
import "../css/messageform.css";

const MessageForm = ({ soket }) => {
    const [message, updateMessage] = useState("");
    const [name, updateName] = useState("");

    const sendMessage = () => {
        soket.emit("message", `${name}: ${message}`);
        updateMessage("");
    };


    return (
        <div className="messageForm">
            <input type="text" placeholder="Enter name" onChange={(e) => updateName(e.target.value)} value={name} />
            <input type="text" placeholder="Enter message" onChange={(e) => updateMessage(e.target.value)} value={message} />
            <button onClick={sendMessage}>Send message</button>
        </div>
    );
};

export default MessageForm;
