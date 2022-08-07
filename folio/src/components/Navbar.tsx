import FlexLayout from './FlexLayout';
import "./css/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ChatBubble from '../components/ChatBubble';
import myPic from "../assets/myPic.jpeg";
import { Link } from 'react-router-dom';

type Props = {
    messages: JSX.Element[],
    setMessages: (message: JSX.Element[]) => void
}

const Navbar = ({ messages, setMessages }: Props) => {

    const handleSetMessages = (): void => {
        const elem = <ChatBubble isSent={false} delay={0}>
            <div>My number is <b>+1 (716) 730-0312</b></div>
            <div>Please feel free to reach out to me.</div>
        </ChatBubble>
        const backup = [...messages, elem];
        setMessages(backup);
    }

    return (
        <nav className="nav">
            <FlexLayout direction="horizontal" align="center">
                <div>
                    <Link to="/">
                        <img src={myPic} className="profile-image" />
                    </Link>
                </div>

                <h3 style={{ marginLeft: '0.5em' }}><Link to="/" className="nostyle">Prakshal Jain</Link></h3>

                <div style={{ marginLeft: 'auto' }}>
                    <FontAwesomeIcon icon={faPhone} className="icon" size="lg" onClick={handleSetMessages} />
                    <a href="https://www.linkedin.com/in/prakshal-jain-profile/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" size="lg" style={{ marginLeft: '1.5em' }} /></a>
                    <a href="https://github.com/Prakshal-Jain/" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon" size="lg" style={{ marginLeft: '1.5em' }} /></a>
                </div>
            </FlexLayout>
        </nav>
    )
}

export default Navbar;