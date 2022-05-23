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

    const getTime = () => {
        const addZero = (num) => {
            return num < 10 ? "0" + num : num;
        };

        let today = new Date();
        return addZero(today.getHours()) + ":" + addZero(today.getMinutes()) + ":" + addZero(today.getSeconds());

    }

    const sendMessage = () => {
        soket.emit("message", {
            name: name,
            message: message,
            color: userColor,
            time: getTime()
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
