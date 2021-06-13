import React, { Component } from "react";
import "./ChatHistory.scss";
import Message from "../Message/Message";
import image from './image/1.png'; 
class ChatHistory extends Component {
  render() {
    console.log(this.props.chatHistory);
  const messages = this.props.chatHistory.map(msg => <Message message={msg.data} />);
const h="hello";
    return (
      <div className="ChatHistory">
        <div className="his">
         <img src={image} alt="Logo" width="40px" height="40px" style={{border: '1px solid white'}}/>
        <div className="chat">
       
        <h5>Hi there welcome to Sastec Support Chat !</h5>
        <input  value ="Recherchez sur notre aide"onClick={h}  /></div></div>
        <div className="message">
        {messages} </div>
      </div>
      
    );
  }
}

export default ChatHistory;