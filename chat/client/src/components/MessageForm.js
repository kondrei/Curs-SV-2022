import { useState } from "react";
import "../css/messageform.css";

const MessageForm = ({ soket }) => {
    const [message, updateMessage] = useState("");

    const handleMessage = (e) => {
        updateMessage(e.target.value)
    };

    const sendMessage = () => {
        soket.emit("message", message);
    };

    return (
        <div className="messageForm">
            <input type="text" placeholder="Enter name" />
            <input type="text" placeholder="Enter message" onChange={handleMessage} value={message} />
            <button onClick={sendMessage}>Send message</button>
        </div>
    );
};

export default MessageForm;
