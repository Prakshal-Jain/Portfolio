import Navbar from './components/Navbar';
import ChatContainer from './pages/ChatContainer'
import './css/chatfolio.css';
import { useState } from 'react';

import { messages as init_messages } from "./data/messages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Experiences from './pages/Experiences';

function ChatFolio() {
  const [messages, setMessages] = useState(init_messages);

  return (
    <div className="fullheight">
      <BrowserRouter>
        <Navbar messages={messages} setMessages={setMessages} />
        <Routes>
          <Route path="/" element={<ChatContainer messages={messages} />} />
          <Route path="about" element={<About />} />
          <Route path="experiences" element={<Experiences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ChatFolio;
