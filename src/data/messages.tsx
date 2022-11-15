import ChatBubble from "../components/ChatBubble";
import FlexLayout from "../components/FlexLayout";
import Hello from "../assets/Hello.png";
import Sure from "../assets/Sure.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faHeart } from "@fortawesome/free-solid-svg-icons";
import '../css/chatfolio.css';
import { Link } from "react-router-dom";
import resume from "../assets/Prakshal_Resume.pdf";


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
                <div>Sure! I would love to <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />...</div>
                <div>
                    You can learn more about me by clicking the following links:
                    <ul>
                        <li><Link to="/about" className="list_links">About Me</Link></li>
                        <li><Link to="/experiences" className="list_links">Work Experiences</Link></li>
                        <li><Link to="/projects" className="list_links">Projects &amp; Open source</Link></li>
                        <li><a download href={resume} className="list_links">Download my Resume</a></li>
                    </ul>
                </div>
                <p>Or</p>
                <div><b>You can also click on the <FontAwesomeIcon icon={faClose} style={{ margin: '0.2em', marginBottom: 0, padding: '0.2em', border: 'thin solid rgba(255, 214, 10, 1)', borderRadius: '0.2em' }} /> on top right of the navigation bar to close the tab view. You can click on <FontAwesomeIcon icon={faBars} style={{ marginLeft: '0.2em', marginRight: '0.2em', padding: '0.2em', border: 'thin solid rgba(255, 214, 10, 1)', borderRadius: '0.2em' }} /> to reopen it.</b></div>
            </div>
        </FlexLayout>
    </ChatBubble>,
]