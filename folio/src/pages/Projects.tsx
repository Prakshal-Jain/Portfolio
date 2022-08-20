import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import FlexLayout from "../components/FlexLayout";
import "../css/projects.css";
import { projects } from "../data/project_list";
import ghavtar from "../assets/gh-avtar.png";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/Prakshal-Jain/repos")
            .then(res => res.json())
            .then(val => setRepos(val.map((x: { html_url: string, name: string }) => <option value={x.html_url}>{x.name}</option>)))
    }, []);

    const handleRepoSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        window.open(event.target.value, "_blank");
    }

    return (
        <FlexLayout direction="vertical">
            <div className="outer-window">
                <FlexLayout style={{ padding: '0em 1em 0.6em 1em' }}>
                    <div className="circle-small" style={{ backgroundColor: 'red' }}></div>
                    <div className="circle-small" style={{ backgroundColor: 'rgba(255, 214, 10, 1)' }}></div>
                    <div className="circle-small" style={{ backgroundColor: 'green' }}></div>
                </FlexLayout>
                <div className="inner-window">
                    <div className="gh-navbar">
                        <FlexLayout align="center">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                            <select className="gh-select" onChange={handleRepoSelection}>
                                <option value="" disabled selected>Select my real-time public repos</option>
                                {repos}
                            </select>

                            <div style={{ marginLeft: 'auto' }}>
                                <a href="https://github.com/Prakshal-Jain" target="blank">
                                    <img src={ghavtar} className="profile-image" />
                                </a>
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </FlexLayout>
                    </div>

                    <div className="repos">
                        {projects.map(({ name, description, link, skills, isInProgress }) => (
                            <div className="repo-container">
                                <FlexLayout direction="vertical">
                                    <FlexLayout align="center">
                                        <a href={link} className="nostyle">
                                            <div className="project-name">
                                                {name}
                                            </div>
                                        </a>
                                        <div className="progress-badge">
                                            {isInProgress ? "In progress" : "Completed"}
                                        </div>
                                    </FlexLayout>

                                    <div>
                                        {description}
                                    </div>

                                    <FlexLayout align="center" style={{ marginTop: '0.5em' }}>
                                        {skills.map((x, idx) => (<div className="project-skill-box" key={`project-${name}-skill-${idx}`}>{x}</div>))}
                                    </FlexLayout>
                                </FlexLayout>
                            </div>
                        ))}
                        <b><a href="https://github.com/Prakshal-Jain?tab=repositories" target="_blank">Click</a> to see all my projects</b>
                    </div>
                </div>
            </div>
        </FlexLayout>
    )
}

export default Projects;