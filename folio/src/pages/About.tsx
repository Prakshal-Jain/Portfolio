import FlexLayout from "../components/FlexLayout";
import Heart from '../assets/Heart.png';
import "../css/about.css";
import PageContent from "../components/PageContent";
import { skills } from "../data/skills"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const About = () => (
    <FlexLayout direction="vertical" align="stretch" style={{ marginBottom: '2em' }}>
        <FlexLayout>
            <div className="about-container" style={{ minWidth: '35%' }}>
                <img src={Heart} className="about-image" />
                <h4>Front End Software Developer Intern at Meta (Facebook)</h4>
                <PageContent delay={0} selected={0} />
            </div>

            <div className="about-container" style={{ flexGrow: 1 }}>
                <h2>About Me</h2>
                <hr />
                <div style={{ textAlign: 'left' }}>
                    <p>
                        My goal is to remain on the cutting-edge of advancements and make an impact on the world by simplifying tasks for users in creative and innovative ways.
                    </p>
                    <p>
                        I love working as a Software Engineer because it gives an artistic point of view and abstracts the complexity hidden underneath as well as provides the fun of working on sophisticated logic to handle data efficiently. I have been working on designing, prototyping, and implementing user interfaces for over 5 years with multiple industry-level work experiences. The UI/UX is so important because it is one of the first things that help customers emotionally connected to a product/company.
                    </p>
                    <p>
                        I love a fast-paced work environment and challenges, meet bright and smart people, learn new skills and technologies, bring the best user experience to the customers, and use my skills to positively impact the world every day.
                    </p>
                </div>
            </div>
        </FlexLayout>

        <FlexLayout align="stretch">
            <div className="about-container" style={{ flexGrow: 1 }}>
                <h3>Skills</h3>
                <hr />
                {Object.entries(skills).map(([skill_title, skill_list]) => (
                    <div>
                        <h4>{skill_title}</h4>
                        <FlexLayout style={{ flexWrap: 'wrap' }} align="center">{skill_list.map(skill => <div className="skill-box">{skill}</div>)}</FlexLayout>
                    </div>
                ))}
            </div>
        </FlexLayout>

        <div style={{textAlign: 'center'}}>
            <Link to="/" className="nostyle">
                <FontAwesomeIcon icon={faHome} />
            </Link>
        </div>
    </FlexLayout>
)

export default About;