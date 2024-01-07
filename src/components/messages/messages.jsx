import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/message.jsx";
import './messages.css'
function Messages({messages,name}){
    return(
        <ScrollToBottom className="messages">
            {messages.map((message,i)=><div key={i}><Message message={message} name={name}></Message></div>)}
        </ScrollToBottom>

    )

}
export default Messages