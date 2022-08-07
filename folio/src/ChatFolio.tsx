import Navbar from './components/Navbar';
import ChatContainer from './pages/ChatContainer'
import './css/chatfolio.css';
import { useState } from 'react';

import { messages as init_messages } from "./data/messages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';

function ChatFolio() {
  const [messages, setMessages] = useState(init_messages);

  return (
    <div className="fullheight">
      <BrowserRouter>
        <Navbar messages={messages} setMessages={setMessages} />
        <Routes>
          <Route path="/" element={<ChatContainer messages={messages} />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ChatFolio;
