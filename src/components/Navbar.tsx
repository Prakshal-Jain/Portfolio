import FlexLayout from './FlexLayout';
import "./css/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ChatBubble from '../components/ChatBubble';
import myPic from "../assets/myPic.jpeg";
import { Link } from 'react-router-dom';
import PageContent from './PageContent';
import { useState } from 'react';

type Props = {
    currTab: number,
    setCurrTab: (tabIdx: number) => void;
}

const Navbar = ({ currTab, setCurrTab }: Props) => {

    const [isPageNavOpen, setIsPageNavOpen] = useState<boolean>(true);

    return (
        <nav className={`nav sticky z-top ${isPageNavOpen ? "" : "border-bottom-nav"}`}>
            <FlexLayout direction="horizontal" align="center" style={{ padding: '0.5em 1.5em 0.5em 1.5em' }}>
                <div>
                    <Link to="/" onClick={() => setCurrTab(-1)}>
                        <img src={myPic} className="profile-image" />
                    </Link>
                </div>

                <h3 style={{ marginLeft: '0.5em' }}><Link to="/" className="nostyle" onClick={() => setCurrTab(-1)}>Prakshal Jain</Link></h3>

                <div style={{ marginLeft: 'auto' }}>
                    <a href="https://www.linkedin.com/in/prakshal-jain-profile/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" size="lg" style={{ marginLeft: '1.5em' }} /></a>
                    <a href="https://github.com/Prakshal-Jain/" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon" size="lg" style={{ marginLeft: '1.5em' }} /></a>
                    <a className="icon" style={{ marginLeft: '1.5em' }} onClick={() => setIsPageNavOpen(!isPageNavOpen)}><FontAwesomeIcon icon={isPageNavOpen ? faClose : faBars} /></a>
                </div>
            </FlexLayout>

            {isPageNavOpen && (
                <div className="nav-submenu animate-fadein">
                    <PageContent delay={0} selected={currTab} setSelected={(idx) => { setCurrTab(idx); setIsPageNavOpen(!isPageNavOpen) }} />
                </div>
            )}
        </nav>
    )
}

export default Navbar;