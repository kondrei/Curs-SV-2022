import { useEffect, useState } from "react";
import "../css/messageform.css";

const MessageForm = ({ soket }) => {
    const [message, updateMessage] = useState("");
    const [name, updateName] = useState("");
    const [userColor, setUserColor] = useState();

    useEffect(() => {
        setUserColor("hsl(" + 360 * Math.random() + ',' +
            (25 + 70 * Math.random()) + '%,' +
            (85 + 10 * Math.random()) + '%)');
    }, [name]);

    const sendMessage = () => {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        soket.emit("message", {
            name: name,
            message: message,
            color: userColor,
            time: time
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
                placeholder="Your name"
                onChange={(e) => updateName(e.target.value)}
                value={name} />
            <input type="text" id="message"
                placeholder="Your message"
                onKeyPress={(e) => handleEnter(e)}
                onChange={(e) => updateMessage(e.target.value)}
                value={message} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default MessageForm;
