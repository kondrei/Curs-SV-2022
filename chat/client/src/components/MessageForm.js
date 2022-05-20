import { useState } from "react";
import "../css/messageform.css";

const MessageForm = ({ soket }) => {
    const [message, updateMessage] = useState("");
    const [name, updateName] = useState("");

    const sendMessage = () => {
        soket.emit("message", {

            name: name,
            message: message
        }
        );
        updateMessage("");
    };

    const handleEnter = (e) => {
        if (e.charCode === 13) {
            updateMessage(document.getElementById("message").value);
            sendMessage();
        };
    }

    return (
        <div className="messageForm">
            <input type="text"
                placeholder="Enter your name"
                onChange={(e) => updateName(e.target.value)}
                value={name} />
            <input type="text" id="message"
                placeholder="Enter message + Enter"
                onKeyPress={(e) => handleEnter(e)}
                onChange={(e) => updateMessage(e.target.value)}
                value={message} />
            <button onClick={sendMessage}>Send message</button>
        </div>
    );
};

export default MessageForm;
