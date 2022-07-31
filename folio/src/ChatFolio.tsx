import Navbar from './components/Navbar';
import ChatContainer from './components/ChatContainer'
import './css/chatfolio.css';
import { useState } from 'react';

import {messages as init_messages} from "./data/messages"



function ChatFolio() {
  const [messages, setMessages] = useState(init_messages);

  return (
    <div className="fullheight">
      <Navbar messages={messages} setMessages={setMessages} />
      <ChatContainer messages={messages} />
    </div>
  );
}

export default ChatFolio;
