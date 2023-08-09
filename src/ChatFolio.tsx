import Navbar from './components/Navbar';
import ChatContainer from './pages/ChatContainer'
import './css/chatfolio.css';
import { useState } from 'react';

import { messages as init_messages } from "./data/messages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import About from './pages/About';
import Experiences from './pages/Experiences';
import { pages } from "./data/pages"
import Projects from './pages/Projects';
import MyStory from './pages/MyStory';
import NotFoundPage from './pages/NotFoundPage';
import Homepage from './pages/Homepage';

function ChatFolio() {
  const [messages, setMessages] = useState(init_messages);

  const url = window.location.href;
  const {
    pathname
  } = new URL(url);

  const [currTab, setCurrTab] = useState<number>(pages.findIndex(x => x.url === pathname));
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <div className="fullheight">
      <BrowserRouter basename="/Portfolio">
        <Navbar currTab={currTab} setCurrTab={setCurrTab} />
        <Routes>
          <Route path="/" element={isPortrait ? <ChatContainer messages={messages} /> : <Homepage />} />
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
