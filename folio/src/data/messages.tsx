import ChatBubble from "../components/ChatBubble";
import FlexLayout from "../components/FlexLayout";
import Hello from "../assets/Hello.png";
import Sure from "../assets/Sure.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSmile } from "@fortawesome/free-solid-svg-icons";
import PageContent from "../components/PageContent";
import '../css/chatfolio.css';

export const messages = [
    <ChatBubble isSent={false} delay={0}>
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
    <ChatBubble isSent={true} delay={500}>
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
    </ChatBubble>,
    <ChatBubble isSent={false} delay={1000}>
        <FlexLayout align="center">
            <div className="chat-image">
                <img src={Sure} className="image" />
            </div>
            <div className="chat-text">
                <div>Sure! I would love to <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /></div>
                <div>
                    Please click on any tab below to learn more about me in that domain <FontAwesomeIcon icon={faSmile} style={{ color: "#ffcb4c" }} />
                </div>
            </div>
        </FlexLayout>
    </ChatBubble>,
    <div className="sticky">
        <PageContent delay={1300} />
    </div>
]