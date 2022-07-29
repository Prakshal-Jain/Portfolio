import Navbar from './components/Navbar';
import ChatContainer from './components/ChatContainer'
import './css/chatfolio.css';
import { useState } from 'react';
import ChatBubble from './components/ChatBubble';
import FlexLayout from './components/FlexLayout';
import Hello from "./assets/Hello.png";

const init_messages = [
  <ChatBubble isSent={false} delay={500}>
      <FlexLayout align="center">
          <div className="chat-image">
              <img src={Hello} className="image" />
          </div>
          <div className="chat-text">
              <div>Hello! I am Prakshal.</div>
              <div>
                  Great to meet you. How can I help you today?
              </div>
          </div>
      </FlexLayout>
  </ChatBubble>,
      <ChatBubble isSent={true} delay={1000}>
          <div>
              <div>
                  Hello Prakshal. Great to meet you!
              </div>
              <div>
                  Saw your profile on <b>LinkedIn</b>: {' '}
                  <a href="https://www.linkedin.com/in/prakshal-jain-profile/" target="_blank">
                      https://www.linkedin.com/in/prakshal-jain-profile/
                  </a>.
              </div>
              <div>
                  <b>
                      Tell me more about yourself!
                  </b>
              </div>
          </div>
      </ChatBubble>
]

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
