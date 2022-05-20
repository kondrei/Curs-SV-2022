import { useEffect } from "react";
import React from "react";
import "../css/chatbox.css";

const ChatBox = ({ chats }) => {
    useEffect(() => {
        document.getElementById("scroll").scrollIntoView(false);
    }, [chats]);

    return (
        <div className="chatBox">
            <div className="messageList">
                <div id="scroll">
                    <ul>
                        {chats && chats.map((element, index) => (
                            <li key={index}>
                                <strong>{element.name}:</strong>{' '}
                                {element.message}
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
