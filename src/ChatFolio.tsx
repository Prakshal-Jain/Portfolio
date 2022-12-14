import Navbar from './components/Navbar';
import ChatContainer from './pages/ChatContainer'
import './css/chatfolio.css';
import { useEffect, useState } from 'react';

import { messages as init_messages } from "./data/messages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Experiences from './pages/Experiences';
import Awards from './pages/Awards';
import { pages } from "./data/pages"
import Projects from './pages/Projects';
import MyStory from './pages/MyStory';
import NotFoundPage from './pages/NotFoundPage';

function ChatFolio() {
  const [messages, setMessages] = useState(init_messages);

  const url = window.location.href;
  const {
    pathname
  } = new URL(url);

  const [currTab, setCurrTab] = useState<number>(pages.findIndex(x => x.url === pathname));

  return (
    <div className="fullheight">
      <BrowserRouter basename="/Portfolio">
        <Navbar messages={messages} setMessages={setMessages} currTab={currTab} setCurrTab={setCurrTab} />
        <Routes>
          <Route path="/" element={<ChatContainer messages={messages} />} />
          <Route path="about" element={<About />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="projects" element={<Projects />} />
          <Route path="story" element={<MyStory />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ChatFolio;
