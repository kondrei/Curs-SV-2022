import { useState } from "react";
import "../css/messageform.css";

const MessageForm = ({ soket }) => {
    const [message, updateMessage] = useState("");

    const handleMessage = (e) => {
        updateMessage(e.target.value)
        console.log(e.target.value);
    };

    const sendMessage = () => {
        console.log('saa')
        soket.emit("hello", message, (response) => {
            console.log(response); // "got it"
        });
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
