import React, { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import io  from "socket.io-client";
import InfoBar from "../infobar/infobar";
import Input from "../Input/input";
import Messages from "../messages/messages";
import TextContainer from "../NumberofUsers/NumberofUsers";
import './chat.css'
let socket
const Chat = () => {
  const location = useLocation();
  const [name,setname]=useState('')
  const [room,setroom]=useState('')
  const [message,setmessage]=useState('')
  const [messages,setmessages]=useState([])
  const [users,setUsers]=useState([])
  const ENDPOINT='localhost:5000' 
 
  useEffect(() => {
    const {name,room} = queryString.parse(location.search);
    console.log(name)
    // console.log(data);
    socket=io(ENDPOINT)
    console.log(socket)
    setname(name)
    setroom(room)
    console.log(room)
    socket.emit('join',{name,room},()=>{
// alert(error)
    })
    return () => {
      socket.disconnect();// Emit the 'disconnect' event
      socket.off();
    };
  }, [ENDPOINT,location.search]);

  useEffect(()=>{
    socket.on('message',(message)=>{
      setmessages([...messages,message])


    })
    socket.on("roomData",({users})=>{
      setUsers(users)
    })
  },[messages])
  const sendmessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setmessage(''));
    }
  }
  
  console.log(message,messages)


  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name}/>
        <Input message={message} sendMessage={sendmessage} setMessage={setmessage}/>
       
      
      </div>
      <TextContainer users={users}/>


    </div>
  );
}

export default Chat;
