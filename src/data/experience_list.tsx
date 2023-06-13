import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import starkandwayne from '../assets/starkandwayne.png';
import memoryfox from "../assets/memoryfox.png";
import ub from "../assets/UB.png"
import tbp from "../assets/TBP.png"

export const experiences = [
    {
        company: "Meta",
        role: "Front End Engineer | Facebook",
        start_date: "May 2022",
        end_date: "Aug 2022",
        description: (
            <ul>
                <li>
                    Gained 91% of the mobile-based customers of the total website visitors by developing and integrating
                    embedded signup flow for the mobile site with the back end application.
                </li>
                <li>
                    Accelerated the company-wide mobile web development process time by 70% by introducing an
                    internal mobile React component library. This boosted the product launch timeline from 7 months to only
                    3.5 months, amplified UI and code consistency, end to end Jest testing, and served code reduction.
                </li>
                <li>
                    Worked closely with UX designers and project managers to refine existing UI, documented suggestions, worked on bug fixes, created hooks for GraphQL API calls, added Flow type checking, and reorganized
                    the existing codebase for a more efficient development process beyond the scope of my intern project.
                </li>
            </ul>
        ),
        logo: <FontAwesomeIcon icon={faFacebook} />,
        background_color: '#0668E1',
        color: '#fff'
    },

    {
        company: "Meta",
        role: "Front End Engineer Intern | WhatsApp",
        start_date: "May 2022",
        end_date: "Aug 2022",
        description: (
            <ul>
                <li>
                    Gained 91% of the mobile-based customers of the total website visitors by developing and integrating
                    embedded signup flow for the mobile site with the back end application.
                </li>
                <li>
                    Accelerated the company-wide mobile web development process time by 70% by introducing an
                    internal mobile React component library. This boosted the product launch timeline from 7 months to only
                    3.5 months, amplified UI and code consistency, end to end Jest testing, and served code reduction.
                </li>
                <li>
                    Worked closely with UX designers and project managers to refine existing UI, documented suggestions, worked on bug fixes, created hooks for GraphQL API calls, added Flow type checking, and reorganized
                    the existing codebase for a more efficient development process beyond the scope of my intern project.
                </li>
            </ul>
        ),
        logo: <FontAwesomeIcon icon={faWhatsapp} />,
        background_color: '#25d366',
        color: '#000'
    },

    {
        company: "Stark & Wayne",
        role: "Front End Developer Intern",
        start_date: "Jan 2022",
        end_date: "May 2022",
        description: (
            <ul>
                <li>
                    Grew the customer base by 84% within 4 months by developing and launching Genesis UI - a web
                    interface to access deployment status in real-time.
                </li>
                <li>
                    Supervised and led a team of 3 front-end developers to build React components, ensure data security,
                    improve efficiency and maintain software development best practices in an agile life cycle.
                </li>
                <li>
                    Improved customer satisfaction rate to 99% by making recommendations and using the right up-to-date
                    tools to maximize efficiency, incorporating accessibility features, and devising creative solutions to feature requests like QuickView favorite deployments, auto-updates, and so on.
                </li>
            </ul>
        ),
        logo: <img src={starkandwayne} className="vertical-center" style={{ width: '100%' }} />,
        background_color: '#0067ac',
        color: '#fff'
    },

    {
        company: "MemoryFox",
        role: "Software Developer (Front End) Intern",
        start_date: "May 2021",
        end_date: "Aug 2021",
        description: (
            <ul>
                <li>
                    Enhanced user interaction rate by 32.5% and platform’s avg. user time spent by 44% by building efficient
                    algorithms for DOM manipulation, building responsive, reusable, and optimized components in ReactJS, creating REST API endpoints in PHP, presenting daily presentations, communicating about user demands/needs with the marketing team, and implementing solutions.
                </li>
            </ul>
        ),
        logo: <img src={memoryfox} className="vertical-center" style={{ width: '100%' }} />,
        background_color: '#ee4a21',
        color: '#fff'
    },

    {
        company: "University at Buffalo",
        role: "Front End Developer",
        start_date: "Mar 2020",
        end_date: "May 2021",
        description: (
            <ul>
                <li>
                    Reduced research publication process time by 65% by designing, implementing UIs, documenting,
                    and developing the website, accessibility resources, multiple in-site portals, and Bash scripting to automate code deployment for the Computing for Social Good organization from the ground up.
                </li>
            </ul>
        ),
        logo: <img src={ub} className="vertical-center" style={{ width: '100%', borderColor: '#ee4a21' }} />,
        background_color: '#0067ac',
        color: '#fff'
    },

    {
        company: "The Tau Beta Pi Association, Inc.",
        role: "Vice President",
        start_date: "May 2021",
        end_date: "May 2022",
        description: (
            <ul>
                <li>
                    Vice president and scholar of honor society. Only top 1/8th student of junior class are invited to join.
                </li>
                <li>
                    Boosted the student's participation rate inclub activities by 40% in comparison to previous years.
                </li>
                <li>
                    Setting up team meetings and planning out the next steps and events.
                </li>
                <li>
                    Sending details of current and future students to headquarters.
                </li>
                <li>
                    Organizing meetings with guests.
                </li>
            </ul>
        ),
        logo: <img src={tbp} className="vertical-center" style={{ width: '100%' }} />,
        background_color: '#28282b',
        color: '#fff'
    },

    {
        company: "University at Buffalo Department of Communicative Disorders & Sciences",
        role: "Software Developer",
        start_date: "Feb 2021",
        end_date: "Jan 2022",
        description: (
            <div>
                <p><b>Impact: </b>Increased the participation rate from 25 participants to 220 participants per week. Reduced analysis time per participant from around 45 min. to 4 min.</p>
                <p><b>Background:</b> The research by the Department of Communicative Disorders &amp; Sciences, University at Buffalo focuses on speech deficits in Parkinson's disease and other neurological movement disorders.</p>
                <p>
                    <b>Responsibilities:</b>
                    <ul>
                        <li>
                            Programming perceptual experiments using JavaScript (MERN).
                        </li>
                        <li>
                            Multi-channel sound analysis etc. using Python (PsychoPy and sounddevice).
                        </li>
                    </ul>
                </p>
            </div>
        ),
        logo: <img src={ub} className="vertical-center" style={{ width: '100%', borderColor: '#ee4a21' }} />,
        background_color: '#0067ac',
        color: '#fff'
    },

    {
        company: "University at Buffalo",
        role: "Teaching Assistant (Data Structures)",
        start_date: "Aug 2021",
        end_date: "Dec 2022",
        description: (
            <div>
                <p><b>Impact: </b>Boosed the performance of overall class by 34%.</p>
                <p><b>Background:</b> Teaching assistants needs to have clear concepts of the data structurs and algorithms to clarify doubts for students and understand and track their progress.</p>
                <p>
                    <b>Responsibilities:</b>
                    <ul>
                        <li>
                            Conducting recitations and office hours.
                        </li>
                        <li>
                            Checking homework and tests.
                        </li>
                        <li>
                            Writing test scripts for programming assignments automated checking for total class size of 100 students.
                        </li>
                    </ul>
                </p>
            </div>
        ),
        logo: <img src={ub} className="vertical-center" style={{ width: '100%', borderColor: '#ee4a21' }} />,
        background_color: '#460109',
        color: '#fff'
    },

    {
        company: "University at Buffalo",
        role: "OneDataShare - Frontend Developer",
        start_date: "Aug 2020",
        end_date: "Oct 2020",
        description: (
            <div>
                <p><b>Impact: </b>Accelerating the product shipping deadline by 3 months by building sophisticated components quickly in React.</p>
                <p><b>Background:</b> Part of a research team involved in creating a tool, designed to work with the existing computing infrastructure to boost data transfer speeds by more than 10 times. Project funded by National Science Foundation with $584,469 grant to address this problem.</p>
                <p>
                    <b>Responsibilities:</b>
                    <ul>
                        <li>
                            Wireframing, prototyping, and developing the frontend components, and working on the website UI component.
                        </li>
                        <li>
                            Incorporating RESTful API developed for the organization to fetch and display user information securely on an endpoint credential page.
                        </li>
                    </ul>
                </p>
            </div>
        ),
        logo: <img src={ub} className="vertical-center" style={{ width: '100%', borderColor: '#ee4a21' }} />,
        background_color: '#0067ac',
        color: '#fff'
    },

    {
        company: "University at Buffalo School of Social Work",
        role: "Web Designer and Developer",
        start_date: "Jul 2020",
        end_date: "Sep 2020",
        description: (
            <div>
                <p>
                    <b>Responsibilities:</b>
                    <ul>
                        <li>
                            Building subdomains of the blogging website for the University at Buffalo School of Social Work to allow people to post the problems and solutions of societal problems and use that information towards research.
                        </li>
                        <li>
                            Creating a fully functional portal (Django Backend and SQL) to manage and store user data.
                        </li>
                    </ul>
                </p>
            </div>
        ),
        logo: <img src={ub} className="vertical-center" style={{ width: '100%', borderColor: '#ee4a21' }} />,
        background_color: '#400740',
        color: '#fff'
    },


    {
        company: "University at Buffalo",
        role: "Teaching Assistant (UB Seminar)",
        start_date: "Aug 2020",
        end_date: "Dec 2020",
        description: (
            <div>
                <p><b>Impact: </b>Managed 93 students.</p>
                <p>
                    <b>Responsibilities:</b>
                    <ul>
                        <li>
                            Tutoring students and grading weekly homework and recitations for 3 Computer Science Seminar sessions.
                        </li>
                    </ul>
                </p>
            </div>
        ),
        logo: <img src={ub} className="vertical-center" style={{ width: '100%', borderColor: '#ee4a21' }} />,
        background_color: '#0067ac',
        color: '#fff'
    },

    {
        company: "University at Buffalo",
        role: "Tech-Squad Consultant",
        start_date: "Feb 2021",
        end_date: "Aug 2021",
        description: (
            <div>
                <p><b>Background:</b> UBIT serves to resolve technical issues of over 30,000 UB Students, faculty, and staff.</p>
                <p>
                    <b>Responsibilities:</b>
                    <ul>
                        <li>
                            Resolving hardware and software-related Technical issues and writing reports.
                        </li>
                        <li>
                            Sending out notification emails, reporting issues, updating information.
                        </li>
                    </ul>
                </p>
            </div>
        ),
        logo: <img src={ub} className="vertical-center" style={{ width: '100%', borderColor: '#ee4a21' }} />,
        background_color: '#322975',
        color: '#fff'
    },
]