import ChatBubble from "../components/ChatBubble";
import FlexLayout from "../components/FlexLayout";
import Hello from "../assets/Hello.png";
import Sure from "../assets/Sure.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faHeart } from "@fortawesome/free-solid-svg-icons";
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
                <div>Sure! I would love to...</div>
                <div><b>Please click on the <FontAwesomeIcon icon={faClose} style={{ margin: '0.2em', marginBottom: 0, padding: '0.2em', border: 'thin solid rgba(255, 214, 10, 1)', borderRadius: '0.2em' }} /> on top right of the navigation bar to close the tab view. You can click on <FontAwesomeIcon icon={faBars} style={{ marginLeft: '0.2em', marginRight: '0.2em', padding: '0.2em', border: 'thin solid rgba(255, 214, 10, 1)', borderRadius: '0.2em' }} /> to reopen it.</b></div>
                <p>Or</p>
                <div>
                    Please click on the tabs above to learn more about me in that domain. <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                </div>
            </div>
        </FlexLayout>
    </ChatBubble>,
]