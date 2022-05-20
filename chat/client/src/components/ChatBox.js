import { useEffect } from "react";
import React from "react";
import "../css/chatbox.css";

const ChatBox = ({ chats }) => {
    useEffect(() => {
        document.getElementById("scroll").scrollIntoView(false);
    }, [chats]);



    const boldName = (message) => {
        let name = message.indexOf(':');
        return (
            <>
                <strong>{message.substring(0, name)}</strong>{message.substring(name, message.length)}
            </>
        )
    }

    return (
        <div className="chatBox">
            <div className="messageList">
                <div id="scroll">
                    <ul>
                        {chats && chats.map((element, index) => (
                            <li key={index}>{boldName(element)}</li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
